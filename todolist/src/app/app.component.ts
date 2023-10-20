import { Component } from '@angular/core';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  listTask: Task[] = [
    {
      date: new Date(),
      description: 'Bug Fix 01 Description',
      status: 'done',
      title: 'Bug Fix 01',
    },
    {
      date: new Date(),
      description: 'Bug Fix 02 Description',
      status: 'done',
      title: 'Bug Fix 02',
    },
    {
      date: new Date(),
      description: 'Bug Fix 03 Description',
      status: 'inprogress',
      title: 'Bug Fix 03',
    },
    {
      date: new Date(),
      description: 'Bug Fix 01 Description',
      status: 'todo',
      title: 'Bug Fix 01',
    },
  ];
  // listTask: Array<IListTask> = [];
  selectedTask: Task | null = null;

  ngOnInit() {
    console.log(this.selectedTask);
  }

  onAddTask(task: Task) {
    this.listTask.push(task);
  }
  handleTask(task: Task) {
    this.selectedTask = task;
  }
  closeDetails() {
    this.selectedTask = null;
  }
}
