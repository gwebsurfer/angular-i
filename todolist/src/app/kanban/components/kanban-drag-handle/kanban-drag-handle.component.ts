import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-kanban-drag-handle',
  template: `<img
    src="assets/icons/drag-indicator-icon.svg"
    alt="drag"
    role="button"
  />`,
  styles: [
    `
      img {
        position: relative;
        cursor: move;
        top: 4px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KanbanDragHandleComponent {
  constructor() {}
}
