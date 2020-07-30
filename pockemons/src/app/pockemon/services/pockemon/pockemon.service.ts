import { Injectable } from '@angular/core';

import { pockemons as data } from '../../../../names';
import { Pockemon } from '../../../Interfases';

@Injectable({
  providedIn: 'root',
})
export class PockemonService {

  private pockemons: Pockemon[] = data;

  getAll(): Pockemon[] {
    return this.pockemons;
  }

  getById(id: number): Pockemon {
    const pockemonIndex = this.getPockemonIndex(id);
    return this.pockemons[pockemonIndex];
  }

  getBySubString(name: string): Pockemon[] {
    return this.pockemons.filter( (pockemon) => {
      return pockemon.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
    });
  }

  updatePockemon(pockemon: Pockemon): void {
    const pockemonIndex = this.getPockemonIndex(pockemon.id);
    const { name, damage, created} = this.pockemons[pockemonIndex];
    if (pockemon.name !== name || pockemon.damage !== damage || pockemon.created !== created ) {
      this.pockemons.splice(pockemonIndex, 1, pockemon);
    }
  }

  filter(): Pockemon[] {
    return [...this.pockemons].sort((a, b) => a.name.localeCompare(b.name));
  }

  pockemonAction(id: number) {
    const pockemonIndex: number = this.getPockemonIndex(id);
    this.pockemons[pockemonIndex].isFree = !this.pockemons[pockemonIndex].isFree;
    const action: string = this.pockemons[pockemonIndex].isFree ? 'released' : 'cought';
    console.log(`Pockemon ${this.pockemons[pockemonIndex].name} was ${action}`);
  }

  private getPockemonIndex(id: number): number {
    return this.pockemons.findIndex( el => el.id === id);
  }
}
