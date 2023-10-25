import { Component, Input, Output, EventEmitter } from '@angular/core';
import { KanbanStateService } from '../../../services/kanban-state.service';
import { MatDialog } from '@angular/material/dialog';
import { KanbanTask } from '../../model';
import { TaskDetailModalComponent } from '../task-detail-modal/task-detail-modal.component';
import { ModalService } from 'src/app/services/modal.service';

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
    private modalService: ModalService
  ) {}

  openTaskModal() {
    const task = this.kanbanService.getTaskDetails(this.task.id);

    if (task) {
      this.modalService.openTaskModal(task);
    }
  }
}
