import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-task-reactive-form',
  templateUrl: './task-reactive-form.component.html',
  styleUrls: ['./task-reactive-form.component.css'],
})
export class TaskReactiveFormComponent {
  public reactiveForm: FormGroup = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    date: ['', Validators.required],
    status: ['toDo', Validators.required],
  });

  public isFormInvalid: boolean = true;

  @Output() addTask = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.reactiveForm.valueChanges.subscribe(() => {
      this.isFormInvalid = this.reactiveForm.invalid;
    });
  }

  public newTask = new Task();

  submitTask() {
    if (this.reactiveForm.invalid) return;

    console.log(this.reactiveForm.value);
    this.reactiveForm.reset();
  }
}
