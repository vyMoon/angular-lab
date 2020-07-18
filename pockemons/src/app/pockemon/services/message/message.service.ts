import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Message } from '../../../Interfases';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageStream = new Subject<any>();

  getMessageObservable(): Observable<any> {
    return this.messageStream.asObservable();
  }

  sendMessage(message: Message): void {
    this.messageStream.next(message);
  }
}
