import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css'],
})
export class TaskFilterComponent {
  @Output() onChangeFilter = new EventEmitter();

  filter: string = 'all';

  handleSelect() {
    this.onChangeFilter.emit(this.filter);
  }
}
