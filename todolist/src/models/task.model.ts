export class Task {
  id: number;
  title: string;
  description: string;
  hours: number;
  date: Date;
  status: string;
  tags?: string[];

  constructor(
    id = 0,
    title = '',
    description = '',
    hours = 0,
    date = new Date(),
    status = '',
    tags = []
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.hours = hours;
    this.date = date;
    this.status = status;
    this.tags = tags;
  }
}
