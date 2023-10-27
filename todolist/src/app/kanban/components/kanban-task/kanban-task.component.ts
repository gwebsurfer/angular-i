import { Component, Input, Output, EventEmitter } from '@angular/core';
import { KanbanStateService } from '../../../services/kanban-state.service';
import { KanbanTask } from '../../../../models';
import { ModalService } from 'src/app/services/modal.service';
import { TaskLogsService } from 'src/app/services/task-logs.service';
import { TransferTaskData } from '../../common';

@Component({
  selector: 'app-kanban-task',
  templateUrl: './kanban-task.component.html',
  styleUrls: ['./kanban-task.component.css'],
})
export class KanbanTaskComponent {
  @Input() task!: KanbanTask;
  @Output() readonly updateTitle = new EventEmitter<string>();
  @Output() readonly updateDescription = new EventEmitter<string>();
  @Output() readonly updateDate = new EventEmitter<Date>();
  @Output() readonly remove = new EventEmitter<void>();
  @Output() readonly edit = new EventEmitter<void>();

  constructor(
    private kanbanService: KanbanStateService,
    private modalService: ModalService,
    private taskLogsService: TaskLogsService
  ) {}

  openTaskModal() {
    const task = this.kanbanService.getTaskDetails(this.task.id);

    if (task) {
      const logMessage = `Card clicado | ID: ${task.id} - Título: ${task.title}`;
      this.taskLogsService.addLog(logMessage);

      this.modalService.openTaskModal(task);
    }
  }
}
