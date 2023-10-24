import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { KanbanModule } from './kanban/kanban.module';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { DateGreaterThanTodayDirective } from './directives/date-greater-than-today.directive';
import { TaskReactiveFormComponent } from './components/task-reactive-form/task-reactive-form.component';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TaskFormComponent,
    DateGreaterThanTodayDirective,
    TaskReactiveFormComponent,
    CurrencyFormatPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    KanbanModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
