import { Component, Input, Output, EventEmitter } from '@angular/core';
import { KanbanList, KanbanTask } from '../../../../models';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-kanban-list',
  templateUrl: './kanban-list.component.html',
  styleUrls: ['./kanban-list.component.css'],
})
export class KanbanListComponent {
  @Input() list!: KanbanList;
  @Output() readonly addTask = new EventEmitter<KanbanTask>();
  @Output() readonly titleChanged = new EventEmitter<string>();
  @Output() readonly remove = new EventEmitter<void>();

  constructor(private modalService: ModalService) {}

  titleUpdate(newTitle: string): void {
    if (newTitle !== this.list.title) {
      this.titleChanged.emit(newTitle);
    }
  }

  openAddTaskModal() {
    this.modalService.openAddTaskModal().subscribe((newTask: KanbanTask) => {
      if (newTask) {
        this.addTask.emit(newTask);
      }
    });
  }
}
