export class Task {
  title: string;
  description: string;
  date: Date;

  constructor(title = '', description = '', date = new Date()) {
    this.title = title;
    this.description = description;
    this.date = new Date();
  }
}
