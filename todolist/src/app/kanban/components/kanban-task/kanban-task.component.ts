import { Component, Input, Output, EventEmitter } from '@angular/core';
import { KanbanStateService } from '../../../services/kanban-state.service';
import { KanbanTask } from '../../../../models';
import { ModalService } from 'src/app/services/modal.service';
import { TaskService } from 'src/app/services/tasks.service';
import { TransferTaskData } from '../../common';
import { TaskLogsService } from 'src/app/services/task-logs.service';

@Component({
  selector: 'app-kanban-task',
  templateUrl: './kanban-task.component.html',
  styleUrls: ['./kanban-task.component.css'],
})
export class KanbanTaskComponent {
  @Input() task!: KanbanTask;
  @Output() readonly edit = new EventEmitter<void>();
  @Output() readonly remove = new EventEmitter<void>();

  constructor(
    private kanbanService: KanbanStateService,
    private modalService: ModalService,
    private taskLogsService: TaskLogsService,
    private taskService: TaskService
  ) {}

  editTask() {
    this.taskService.updateTask(this.task);
    this.edit.emit();
  }

  removeTask() {
    this.taskService.deleteTask(this.task.id);
    this.remove.emit();
  }

  openEditTaskModal() {
    const task = this.task;
    console.log(task);
    this.modalService.openEditTaskModal(task);
  }

  openTaskModal() {
    const task = this.task;

    if (task) {
      const logMessage = `Card clicado | ID: ${task.id} - Título: ${task.title}`;
      this.taskLogsService.addLog(logMessage);

      this.modalService.openTaskModal(task);
    }
  }
}
