import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { pockemons as data } from '../../../../names';
import { Pockemon } from '../../../Interfases';

@Injectable({
  providedIn: 'root',
})
export class PockemonService {

  private pockemons: Pockemon[] = data;

  // getAll(): Observable<Pockemon[]> {
  //   return of(this.pockemons);
  // }

  getAll(): Pockemon[] {
    return this.pockemons;
  }

  getById(id: number): Pockemon {
    const pockemonIndex = this.getPockemonIndex(id);
    return this.pockemons[pockemonIndex];
  }

  getBySubString(name: string): Pockemon[] {
    // return this.pockemons.filter( pockemon => pockemon.name.eng.indexOf(name) > -1)
    return this.pockemons.filter( (pockemon) => {
      return pockemon.name.eng.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) > -1;
      console.log(pockemon.name.eng.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()))
    } )
  }

  filter(): Pockemon[] {
    return [...this.pockemons].sort((a, b) => a.name.eng.localeCompare(b.name.eng));
  }

  pockemonAction(id: number) {
    const pockemonIndex: number = this.getPockemonIndex(id);
    this.pockemons[pockemonIndex].isFree = !this.pockemons[pockemonIndex].isFree;
    const action: string = this.pockemons[pockemonIndex].isFree ? 'released' : 'cought';
    console.log(`Pockemon ${this.pockemons[pockemonIndex].name.eng} was ${action}`);
    // console.log(pockemonIndex)
  }

  private getPockemonIndex(id: number): number {
    return this.pockemons.findIndex( el => el.id === id)
  }

}
