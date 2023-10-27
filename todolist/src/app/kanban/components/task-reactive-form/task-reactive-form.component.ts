import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { KanbanTask, KanbanTaskFactory } from '../../../../models';

@Component({
  selector: 'app-task-reactive-form',
  templateUrl: './task-reactive-form.component.html',
  styleUrls: ['./task-reactive-form.component.css'],
})
export class TaskReactiveFormComponent {
  private nextId: number = 1000;
  public reactiveForm: FormGroup = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    date: ['', Validators.required],
    hours: ['', Validators.required],
    status: ['toDo', Validators.required],
  });

  public isFormInvalid: boolean = true;

  @Output() addTaskToList = new EventEmitter<KanbanTask>();

  constructor(private formBuilder: FormBuilder) {
    this.reactiveForm.valueChanges.subscribe(() => {
      this.isFormInvalid = this.reactiveForm.invalid;
    });
  }

  submitTask() {
    if (this.reactiveForm.invalid) return;

    const newTaskData = this.reactiveForm.value;

    const newTask: KanbanTask = KanbanTaskFactory.from({
      id: this.nextId++,
      title: newTaskData.title,
      description: newTaskData.description,
      hours: newTaskData.hours,
      date: newTaskData.date,
      status: newTaskData.status,
    });

    if (newTask.status !== 'toDo') {
      newTask.status = this.getStatusFromList(newTask.status);
    }

    this.reactiveForm.reset();
    console.log(newTask);

    this.addTaskToList.emit(newTask);
  }

  private getStatusFromList(listStatus: string): string {
    switch (listStatus) {
      case 'toDo':
        return 'toDo';
      case 'inProgress':
        return 'inProgress';
      case 'done':
        return 'done';
      default:
        return 'toDo';
    }
  }
}
