import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  OnInit,
} from '@angular/core';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  isVisible = true;

  @Input() tasks: Task[] = [];
  @Output() handleTask = new EventEmitter();

  filteredTasks: Task[] = [];

  ngOnInit() {
    this.filteredTasks = this.tasks;
  }

  showList() {
    this.isVisible = !this.isVisible;
  }

  selectedTask(task: Task) {
    this.handleTask.emit(task);
  }

  handleFiltro(filter: string) {
    if (filter === 'all') {
      this.filteredTasks = this.tasks;
      return;
    }

    this.filteredTasks = this.tasks.filter((item) => {
      if (item.status === filter) {
        return item;
      }
      return;
    });
  }
}
