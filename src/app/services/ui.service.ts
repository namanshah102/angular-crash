import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddEvent: boolean = false;
  private subject = new Subject<any>(); 

  constructor() { }

  toggleAddTask(): void {
    this.showAddEvent = !this.showAddEvent;
    this.subject.next(this.showAddEvent);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
