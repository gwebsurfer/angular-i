import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

import { KanbanStateService } from '../../../services/kanban-state.service';
import { KanbanBoard } from '../../../../models';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css'],
  providers: [KanbanStateService],
})
export class KanbanBoardComponent {
  board: KanbanBoard = this.kanbanService.board;

  constructor(public kanbanService: KanbanStateService) {}
}
