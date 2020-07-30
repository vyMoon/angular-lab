import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewService {
  private style = 'cards';
  private viewStream = new Subject<any>();

  getStyle() {
    return this.style;
  }

  sendStyle() {
    this.viewStream.next(this.style);
  }

  getStyleObservable(): Observable<any> {
    return this.viewStream.asObservable();
  }

  changeStyle(): void {
    this.style = this.style === 'cards' ? 'lines' : 'cards';
    this.sendStyle();
  }
}
