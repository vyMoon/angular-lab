import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { pockemons as data } from '../../../../names';
import { Pockemon } from '../../../Interfases';

@Injectable({
  providedIn: 'root',
})
export class PockemonService {

  private pockemons: Pockemon[] = data;

  getAll(): Observable<Pockemon[]> {
    return of(this.pockemons);
  }

  getById(id: number): Pockemon | number {
    const pockemonIndex = this.pockemons.findIndex( el => el.id === id);
    return pockemonIndex > -1 ? this.pockemons[pockemonIndex] : pockemonIndex;
  }

  filter(): Pockemon[] {
    return [...this.pockemons].sort((a, b) => a.name.eng.localeCompare(b.name.eng));
  }

}
