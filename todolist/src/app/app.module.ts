import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { KanbanModule } from './kanban/kanban.module';
import { KanbanStateService } from './services/kanban-state.service';
import { ModalService } from './services/modal.service';
import { TaskLogsService } from './services/task-logs.service';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';
import { DateMaskDirective } from './directives/date-mask/date-mask.directive';
import { TaskFormComponent } from './kanban/components/task-form/task-form.component';
import { TaskReactiveFormComponent } from './kanban/components/task-reactive-form/task-reactive-form.component';
import { TaskDetailModalComponent } from './kanban/components/task-detail-modal/task-detail-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskFormComponent,
    TaskReactiveFormComponent,
    CurrencyFormatPipe,
    TaskDetailModalComponent,
    DateMaskDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    KanbanModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [KanbanStateService, ModalService, TaskLogsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
