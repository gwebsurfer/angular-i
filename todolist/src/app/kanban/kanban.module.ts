import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { KanbanBoardComponent } from './components/kanban-board/kanban-board.component';
import { KanbanDragHandleComponent } from './components/kanban-drag-handle/kanban-drag-handle.component';
import { KanbanListTasksWrapperComponent } from './components/kanban-list-tasks-wrapper/kanban-list-tasks-wrapper.component';
import { KanbanListComponent } from './components/kanban-list/kanban-list.component';
import { KanbanTaskComponent } from './components/kanban-task/kanban-task.component';
import { PluralizeDirective } from '../directives/pluralize/pluralize.directive';
import { DateEqualsTodayDirective } from '../directives/date-equals-today/date-equals-today.directive';
import { CustomDateFormatPipe } from '../pipes/date-format.pipe';

@NgModule({
  declarations: [
    KanbanBoardComponent,
    KanbanDragHandleComponent,
    KanbanListTasksWrapperComponent,
    KanbanListComponent,
    KanbanTaskComponent,
    PluralizeDirective,
    DateEqualsTodayDirective,
    CustomDateFormatPipe,
  ],
  imports: [CommonModule, FormsModule, DragDropModule],
  exports: [KanbanBoardComponent, CustomDateFormatPipe],
})
export class KanbanModule {}
