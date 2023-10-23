import { Component, Input, Output, EventEmitter } from '@angular/core';
import { KanbanTask } from '../model';

@Component({
  selector: 'app-kanban-task',
  templateUrl: './kanban-task.component.html',
  styleUrls: ['./kanban-task.component.css'],
})
export class KanbanTaskComponent {
  @Input() task!: KanbanTask;
  @Output() readonly updateDescription = new EventEmitter<string>();
  @Output() readonly remove = new EventEmitter<void>();

  constructor() {}

  descriptionUpdated(newDescription: string): void {
    if (newDescription !== this.task.description) {
      this.updateDescription.emit(newDescription);
    }
  }
}
