import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-task-reactive-form></app-task-reactive-form
    ><app-kanban-board></app-kanban-board>`,
  styles: [
    `
      :host {
        width: 100vw;
      }
    `,
  ],
})
export class AppComponent {}
