import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskReactiveFormComponent } from '../kanban/components/task-reactive-form/task-reactive-form.component';
import { TaskDetailModalComponent } from '../kanban/components/task-detail-modal/task-detail-modal.component';
import { KanbanTask } from '../../models';
import { TaskFormComponent } from '../kanban/components/task-form/task-form.component';

@Injectable()
export class ModalService {
  constructor(private dialog: MatDialog) {}

  openEditTaskModal(task: KanbanTask) {
    const dialogRef = this.dialog.open(TaskFormComponent, {
      data: { task },
    });
  }

  openAddTaskModal() {
    const dialogRef = this.dialog.open(TaskReactiveFormComponent, {});

    return dialogRef.afterClosed();
  }

  openTaskModal(task: KanbanTask) {
    const dialogRef = this.dialog.open(TaskDetailModalComponent, {
      data: { task },
    });
  }
}
