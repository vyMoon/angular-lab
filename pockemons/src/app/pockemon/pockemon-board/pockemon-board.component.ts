import {
  Component, OnInit, Input
} from '@angular/core';

import { Pockemon } from '../../Interfases';
import { letters } from '../../../names';

@Component({
  selector: 'app-pockemon-board',
  templateUrl: './pockemon-board.component.html',
  styleUrls: ['./pockemon-board.component.scss']
})
export class PockemonBoardComponent implements OnInit {

  @Input() style: string;

  pockemons: Pockemon[] = [];
  private pockemonsCount: number = 16;

  constructor() { }

  ngOnInit(): void {
    this.pockemons = this.createPockemons(this.getPockemonsIds(this.pockemonsCount))
  }

  onAction(pockemonId: number): void {
    const pockemonIndex: number = this.pockemons.findIndex( el => el.id === pockemonId );
    this.pockemons[pockemonIndex].isFree = !this.pockemons[pockemonIndex].isFree;
    const action: string = this.pockemons[pockemonIndex].isFree ? 'released' : 'cought';
    console.log(`Pockemon ${this.pockemons[pockemonIndex].name} was ${action}`);
  };

  private getName(): string {
    let name = '';
    const length: number = this.getPockemonData(2, 5);
    for (let i = 0; i < length; i++) {
      name += letters[this.getPockemonData(0, 101)];
    }
    return name;
  };

  private getPockemonsIds(count: number): number[] {
    const pockemonsIds: number[] = [];
    for(;pockemonsIds.length < count;) {
      const id: number = this.getPockemonData(1, 720);
      if (!(id in pockemonsIds)) {
        pockemonsIds.push(id);
      }
    }
    return pockemonsIds;
  };

  private createPockemons(pockemonsIds: number[]): Pockemon[] {
    return pockemonsIds.map( id => {
      return this.createPockemon(id);
    })
  };

  private createPockemon(id: number): Pockemon {
    return {
      name: this.getName(),
      id: id,
      damage: this.getPockemonData(25, 75),
      isFree: true,
    }
  };

  private getPockemonData(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  };

}
