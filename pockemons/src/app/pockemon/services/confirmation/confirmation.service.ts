import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {
  confirm(message?: string): Observable<boolean> {
    const confirmation = window.confirm(message || 'You are going to leave the page. Are you shure?');

    return of(confirmation);
  }
}
