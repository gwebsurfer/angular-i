import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { KanbanTask } from 'src/app/kanban/model';

@Component({
  selector: 'app-task-detail-modal',
  templateUrl: './task-detail-modal.component.html',
  styleUrls: ['./task-detail-modal.component.css'],
})
export class TaskDetailModalComponent {
  constructor(
    public dialogRef: MatDialogRef<TaskDetailModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { task: KanbanTask }
  ) {}

  calculateTotalValue(task: KanbanTask): number {
    const hourlyRate = 125;
    const totalValue = hourlyRate * task.hours;
    return totalValue;
  }

  close() {
    this.dialogRef.close();
  }
}
