import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { KanbanModule } from './kanban/kanban.module';
import { TaskFormComponent } from './kanban/components/task-form/task-form.component';
import { TaskReactiveFormComponent } from './kanban/components/task-reactive-form/task-reactive-form.component';
import { TaskDetailModalComponent } from './kanban/components/task-detail-modal/task-detail-modal.component';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';
import { ModalService } from './services/modal.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskFormComponent,
    TaskReactiveFormComponent,
    CurrencyFormatPipe,
    TaskDetailModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    KanbanModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [ModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
