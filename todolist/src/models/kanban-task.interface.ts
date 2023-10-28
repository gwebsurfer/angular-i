export interface KanbanTask {
  id: number;
  title: string;
  description: string;
  hours: number;
  date: Date;
  status: string;
  tags?: string[];
}
