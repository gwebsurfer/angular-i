import { KanbanTask } from './kanban-task.interface';

let nextId = 1000;

export class KanbanTaskFactory {
  static from({
    id,
    title,
    description,
    hours,
    date,
    status,
  }: KanbanTask): KanbanTask {
    return { id, title, description, hours, date, status };
  }

  static createDefault(): KanbanTask {
    return {
      id: nextId++,
      title: 'Digite o título da tarefa',
      description: 'Digite o texto da tarefa',
      hours: 0,
      date: new Date(),
      status: 'toDo',
    };
  }
}
