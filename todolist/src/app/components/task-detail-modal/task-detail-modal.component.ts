import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { KanbanTask } from 'src/app/kanban/model';

@Component({
  selector: 'app-task-detail-modal',
  templateUrl: './task-detail-modal.component.html',
  styleUrls: ['./task-detail-modal.component.css'],
})
export class TaskDetailModalComponent {
  @Input() task: KanbanTask = {} as KanbanTask;

  constructor(public dialogRef: MatDialogRef<TaskDetailModalComponent>) {}

  close() {
    this.dialogRef.close();
  }
}
