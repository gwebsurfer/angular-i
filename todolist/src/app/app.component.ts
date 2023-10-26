import { Component } from '@angular/core';
import { KanbanStateService } from './services/kanban-state.service';

@Component({
  selector: 'app-root',
  template: `<app-kanban-board></app-kanban-board>
    <app-task-logs [logs]="clickLogs"></app-task-logs>`,
  styles: [
    `
      :host {
        width: 100vw;
      }
    `,
  ],
})
export class AppComponent {
  clickLogs: string[] = [];

  constructor(private kanbanService: KanbanStateService) {
    this.clickLogs = this.kanbanService.getClickLogs();
    console.log('registro de clicks no app: ', this.clickLogs);
  }
}
