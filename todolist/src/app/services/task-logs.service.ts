import { Injectable } from '@angular/core';

@Injectable()
export class TaskLogsService {
  private taskLog: any[] = [];

  constructor() {
    const storedLogs = localStorage.getItem('taskLog');
    if (storedLogs) {
      this.taskLog = JSON.parse(storedLogs);
    }
  }

  addLog(Card: string) {
    const clickTime = new Date().toLocaleString();
    const logMessage = { Data: clickTime, Card };
    this.taskLog.unshift(logMessage);

    localStorage.setItem('taskLogs', JSON.stringify(this.taskLog));
  }

  getLogs() {
    return this.taskLog;
  }
}
