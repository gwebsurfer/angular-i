import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { KanbanModule } from './kanban/kanban.module';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { DateGreaterThanTodayDirective } from './directives/date-greater-than-today.directive';

@NgModule({
  declarations: [
    AppComponent,
    TaskFormComponent,
    DateGreaterThanTodayDirective,
  ],
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, KanbanModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
