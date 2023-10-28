import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { KanbanList, KanbanTask } from '../../../../models';
import { ModalService } from 'src/app/services/modal.service';
import { TaskService } from 'src/app/services/tasks.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-kanban-list',
  templateUrl: './kanban-list.component.html',
  styleUrls: ['./kanban-list.component.css'],
})
export class KanbanListComponent implements OnInit {
  @Input() list!: KanbanList;
  @Output() readonly addTask = new EventEmitter<KanbanTask>();
  @Output() readonly titleChanged = new EventEmitter<string>();
  @Output() readonly remove = new EventEmitter<void>();
  tasks: KanbanTask[] = [];

  constructor(
    private modalService: ModalService,
    private taskService: TaskService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
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

  addTaskToList(newTask: KanbanTask) {
    this.tasks.push(newTask);
  }

  openAddTaskModal() {
    this.modalService.openAddTaskModal().subscribe((newTask: KanbanTask) => {
      if (newTask) {
        this.addTask.emit(newTask);
      }
    });
  }
}
