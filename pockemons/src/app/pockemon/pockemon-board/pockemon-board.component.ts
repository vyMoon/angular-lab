import {
  Component, OnInit,
} from '@angular/core';

import { PockemonService } from '../services/pockemon/pockemon.service';

import { Pockemon } from '../../Interfases';
import { ViewService } from '../services/view/view.service';
import { LanguageService } from '../services/language/language.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pockemon-board',
  templateUrl: './pockemon-board.component.html',
  styleUrls: ['./pockemon-board.component.scss'],
})
export class PockemonBoardComponent implements OnInit {
  pockemons: Pockemon[] = [];

  constructor(
    private pockemonService: PockemonService,
    private viewService: ViewService,
    private languageService: LanguageService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // this.getPockemons();
    // this.pockemons = this.pockemonService.getAll();
    // console.log(this.pockemons)
    this.route.queryParams
      .subscribe(params => {
        const { pockemon } = params
        this.pockemons = pockemon ? 
          this.pockemonService.getBySubString(pockemon) : 
          this.pockemonService.getAll() ;
    });
  }

  get style(): string {
    return this.viewService.style;
  }

  get language(): string {
    return this.languageService.language;
  }

  onAction(pockemonId: number): void {
    this.pockemonService.pockemonAction(pockemonId);
  }

  // private getPockemons(): void {
  //   conso
  //   this.pockemons = this.pockemonService.getAll()
  //   // this.pockemonService.getAll().subscribe( pockemons => this.pockemons = pockemons);
  // }

}
