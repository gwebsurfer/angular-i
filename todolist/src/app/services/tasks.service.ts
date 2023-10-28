import { Injectable } from '@angular/core';
import { KanbanTask } from 'src/models';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: KanbanTask[] = [];
  private localStorageKey = 'tasks';

  constructor(private localStorageService: LocalStorageService) {
    const storedTasks = localStorage.getItem(this.localStorageKey);
    this.tasks = storedTasks ? JSON.parse(storedTasks) : [];

    this.localStorageService
      .getStorageChangesObservable()
      .subscribe((value) => {
        if (value) {
          this.tasks = JSON.parse(value);
        } else {
          this.tasks = [];
        }
      });
  }

  addTask(task: KanbanTask): KanbanTask {
    try {
      const taskId =
        this.tasks.length > 0 ? this.tasks[this.tasks.length - 1].id + 1 : 1;
      task.id = taskId;
      this.tasks.push(task);
      this.saveTasksToLocalStorage();
      return task;
    } catch (error) {
      throw new Error('Erro ao adicionar a tarefa.');
    }
  }

  getTasks(): KanbanTask[] {
    return this.tasks;
  }

  updateTask(updatedTask: KanbanTask): void {
    try {
      const index = this.tasks.findIndex((task) => task.id === updatedTask.id);
      if (index === -1) {
        throw new Error('Tarefa não encontrada.');
      }
      this.tasks[index] = updatedTask;
      this.saveTasksToLocalStorage();
    } catch (error) {
      throw new Error('Erro ao atualizar a tarefa.');
    }
  }

  deleteTask(taskId: number): void {
    try {
      const index = this.tasks.findIndex((task) => task.id === taskId);
      if (index === -1) {
        throw new Error('Tarefa não encontrada.');
      }
      this.tasks.splice(index, 1);
      this.saveTasksToLocalStorage();
    } catch (error) {
      throw new Error('Erro ao excluir a tarefa.');
    }
  }

  private saveTasksToLocalStorage(): void {
    this.localStorageService.setItem(
      this.localStorageKey,
      JSON.stringify(this.tasks)
    );
  }
}
