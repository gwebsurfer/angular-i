import { Component } from '@angular/core';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todo: string = 'todo';
  inprogress: string = 'inprogress';
  done: string = 'done';
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
      description: 'Bug Fix 04 Description',
      status: 'todo',
      title: 'Bug Fix 04',
    },
  ];
  // listTask: Array<IListTask> = [];
  selectedTask: Task | null = null;
  todoTasks: Task[] = [];
  inprogressTasks: Task[] = [];
  doneTasks: Task[] = [];

  ngOnInit() {
    this.organizeTasksByStatus();
  }

  organizeTasksByStatus() {
    this.todoTasks = this.listTask.filter((task) => task.status === 'todo');
    this.inprogressTasks = this.listTask.filter(
      (task) => task.status === 'inprogress'
    );
    this.doneTasks = this.listTask.filter((task) => task.status === 'done');
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
