import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { KanbanTask } from '../../../../models';
import { TaskService } from 'src/app/services/tasks.service';

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
    hours: ['', Validators.required],
    status: ['toDo', Validators.required],
    tags: this.formBuilder.array([]),
  });

  public isFormInvalid: boolean = true;

  @Input() task: KanbanTask | undefined;
  @Output() addTaskToList = new EventEmitter<KanbanTask>();

  get tags() {
    return this.reactiveForm.get('tags') as FormArray;
  }

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService
  ) {
    this.reactiveForm.valueChanges.subscribe(() => {
      this.isFormInvalid = this.reactiveForm.invalid;
    });
  }

  ngOnInit() {
    this.reactiveForm.patchValue({ ...this.task });

    this.task?.tags?.forEach((item) => {
      this.addTag(item);
    });

    console.log(this.reactiveForm.value);
  }

  submitTask() {
    if (this.reactiveForm.invalid) return;

    const newTask: KanbanTask = {
      id: 0,
      ...this.reactiveForm.value,
    };

    const addedTask = this.taskService.addTask(newTask);

    this.addTaskToList.emit(addedTask);

    this.reactiveForm.reset();
  }

  addTag(value = '') {
    this.tags.push(this.formBuilder.control(value, Validators.required));
  }
}
