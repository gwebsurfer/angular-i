import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';
import { TransferTaskData } from '../kanban/common';

import {
  dataBoard,
  KanbanBoard,
  KanbanList,
  KanbanTask,
  KanbanTaskFactory,
} from '../../models';

@Injectable()
export class KanbanStateService {
  private nextId: number = 1000;
  public board: KanbanBoard = dataBoard;

  constructor() {}

  updateListTitle(list: KanbanList, newTitle: string): void {
    list.title = newTitle;
  }

  moveList(fromIndex: number, toIndex: number): void {
    moveItemInArray(this.board.lists, fromIndex, toIndex);
  }

  removeList(listToRemove: KanbanList): void {
    this.board.lists = this.board.lists.filter((list) => list !== listToRemove);
  }

  addTaskToList(list: KanbanList): void {
    list.tasks.push(
      KanbanTaskFactory.from({
        id: this.nextId++,
        title: 'Nova Tarefa',
        description: '',
        hours: 0,
        date: new Date(),
        status: 'toDo',
      })
    );
  }

  removeTaskFromList(list: KanbanList, taskIndex: number): void {
    list.tasks.splice(taskIndex, 1);
  }

  updateTask(task: KanbanTask): void {
    const { id } = task;
    const taskToUpdate = this.getTaskDetails(id);

    if (!taskToUpdate) {
      return;
    }

    Object.assign(taskToUpdate, task);
  }

  reorderTask(list: KanbanList, fromIndex: number, toIndex: number): void {
    moveItemInArray(list.tasks, fromIndex, toIndex);
  }

  transferTask({
    fromList,
    toList,
    fromIndex,
    toIndex,
  }: TransferTaskData): void {
    transferArrayItem(fromList.tasks, toList.tasks, fromIndex, toIndex);
  }

  getTaskDetails(taskId: number): KanbanTask | undefined {
    for (const list of this.board.lists) {
      const task = list.tasks.find((task) => task.id === taskId);
      if (task) {
        return task;
      }
    }
    return undefined;
  }
}
