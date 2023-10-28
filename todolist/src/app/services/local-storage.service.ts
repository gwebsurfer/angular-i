import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class LocalStorageService {
  private storageChangeSubject = new Subject<string>();

  constructor() {
    window.addEventListener('storage', (event) => {
      if (event.key === 'tasks' && event.newValue !== null) {
        this.storageChangeSubject.next(event.newValue);
      }
    });
  }

  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
    this.storageChangeSubject.next(value);
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
    this.storageChangeSubject.next('');
  }

  getStorageChangesObservable(): Observable<string> {
    return this.storageChangeSubject.asObservable();
  }
}
