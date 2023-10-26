import { Component, Input } from '@angular/core';
import { KanbanStateService } from 'src/app/services/kanban-state.service';

@Component({
  selector: 'app-task-logs',
  templateUrl: './task-logs.component.html',
  styleUrls: ['./task-logs.component.css'],
})
export class TaskLogsComponent {
  @Input() logs: string[] = [];
  clickLogs: string[] = [];

  constructor(private kanbanService: KanbanStateService) {
    this.clickLogs = this.kanbanService.getClickLogs();
    console.log('registro de clicks: ', this.clickLogs);
  }
}
