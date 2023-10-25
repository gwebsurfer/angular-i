import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskReactiveFormComponent } from '../kanban/components/task-reactive-form/task-reactive-form.component';
import { TaskDetailModalComponent } from '../kanban/components/task-detail-modal/task-detail-modal.component';
import { KanbanTask } from '../kanban/model';

@Injectable()
export class ModalService {
  constructor(private dialog: MatDialog) {}

  openAddTaskModal() {
    const dialogRef = this.dialog.open(TaskReactiveFormComponent, {
      width: '500px',
    });

    return dialogRef.afterClosed();
  }

  openTaskModal(task: KanbanTask) {
    const dialogRef = this.dialog.open(TaskDetailModalComponent, {
      data: { task },
    });
  }
}
