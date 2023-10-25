import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-kanban-board></app-kanban-board>`,
  styles: [
    `
      :host {
        width: 100vw;
      }
    `,
  ],
})
export class AppComponent {}
