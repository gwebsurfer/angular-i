import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';
import { TaskFilterComponent } from './components/task-filter/task-filter.component';
import { DateGreaterThanTodayDirective } from './directives/date-greater-than-today.directive';

@NgModule({
  declarations: [
    AppComponent,
    TaskDetailComponent,
    TaskFormComponent,
    TaskListComponent,
    CurrencyFormatPipe,
    TaskFilterComponent,
    DateGreaterThanTodayDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
