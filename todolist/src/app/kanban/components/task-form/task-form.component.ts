import {
  Component,
  EventEmitter,
  Inject,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskService } from 'src/app/services/tasks.service';
import { KanbanTask } from 'src/models';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  tags: string[] = [];

  constructor(
    private taskService: TaskService,
    public dialogRef: MatDialogRef<TaskFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { task: KanbanTask }
  ) {
    if (data.task.tags && data.task.tags.length > 0) {
      this.tags = [...data.task.tags];
    } else {
      this.tags = [];
    }
  }

  @Output() saveEditedTask = new EventEmitter<KanbanTask>();

  saveTask() {
    this.taskService.updateTask(this.data.task);
    this.saveEditedTask.emit(this.data.task);
    this.dialogRef.close();
  }
}
