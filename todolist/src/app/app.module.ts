import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { KanbanModule } from './kanban/kanban.module';
import { TaskFormComponent } from './kanban/components/task-form/task-form.component';
import { DateGreaterThanTodayDirective } from './directives/date-greater-than-today.directive';
import { TaskReactiveFormComponent } from './kanban/components/task-reactive-form/task-reactive-form.component';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';
import { TaskDetailModalComponent } from './kanban/components/task-detail-modal/task-detail-modal.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    TaskFormComponent,
    DateGreaterThanTodayDirective,
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
