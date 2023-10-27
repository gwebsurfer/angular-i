import { KanbanTask } from './kanban-task.interface';

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
}
