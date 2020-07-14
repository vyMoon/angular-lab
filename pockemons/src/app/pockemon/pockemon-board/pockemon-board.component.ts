import {
  Component, OnInit,
} from '@angular/core';

import { PockemonService } from '../services/pockemon/pockemon.service';

import { Pockemon } from '../../Interfases';
import { ViewService } from '../services/view/view.service';
import { LanguageService } from '../services/language/language.service';

@Component({
  selector: 'app-pockemon-board',
  templateUrl: './pockemon-board.component.html',
  styleUrls: ['./pockemon-board.component.scss']
})
export class PockemonBoardComponent implements OnInit {
  pockemons: Pockemon[] = [];

  constructor(
    private pockemonService: PockemonService,
    private viewService: ViewService,
    private languageService: LanguageService,
  ) { }

  ngOnInit(): void {
    this.getPockemons();
  }

  get style(): string {
    return this.viewService.style;
  }

  get language(): string {
    return this.languageService.language;
  }

  onAction(pockemonId: number): void {
    const pockemonIndex: number = this.pockemons.findIndex( el => el.id === pockemonId );
    this.pockemons[pockemonIndex].isFree = !this.pockemons[pockemonIndex].isFree;
    const language = this.languageService.language;
    const action: string = this.pockemons[pockemonIndex].isFree ? 'released' : 'cought';
    console.log(`Pockemon ${this.pockemons[pockemonIndex].name[language]} was ${action}`);
  }

  private getPockemons(): void {
    this.pockemonService.getAll().subscribe( pockemons => this.pockemons = pockemons);
  }

}
