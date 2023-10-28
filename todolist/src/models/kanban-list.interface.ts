import { KanbanTask } from './kanban-task.interface';

export interface KanbanList {
  id: number;
  title: string;
  tasks?: KanbanTask[];
}

export interface KanbanListWithTasks extends KanbanList {
  tasks: KanbanTask[];
}
