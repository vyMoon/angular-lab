import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewService {
  style: string = 'cards';

  getStyle() {
    return this.style;
  }

  changeStyle(): void {
    this.style = this.style === 'cards' ? 'lines' : 'cards';
  }
}
