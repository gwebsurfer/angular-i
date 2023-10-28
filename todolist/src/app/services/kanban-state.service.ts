import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';
import { TransferTaskData } from '../kanban/common';

import { dataBoard, KanbanBoard, KanbanList, KanbanTask } from '../../models';
import { TaskService } from './tasks.service';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class KanbanStateService {
  public board: KanbanBoard = { lists: [] };

  constructor(
    private taskService: TaskService,
    private localStorageService: LocalStorageService
  ) {
    this.updateBoardFromTasks();

    this.localStorageService.getStorageChangesObservable().subscribe(() => {
      this.updateBoardFromTasks();
    });
  }

  private updateBoardFromTasks() {
    const tasks = this.taskService.getTasks();

    const toDoColumn: KanbanList = {
      id: 1,
      title: 'To Do',
      tasks: tasks.filter((task) => task.status === 'toDo'),
    };
    const inProgressColumn: KanbanList = {
      id: 2,
      title: 'In Progress',
      tasks: tasks.filter((task) => task.status === 'inProgress'),
    };
    const doneColumn: KanbanList = {
      id: 3,
      title: 'Done',
      tasks: tasks.filter((task) => task.status === 'done'),
    };

    this.board.lists = [toDoColumn, inProgressColumn, doneColumn];
  }
}
