import {
  Component, OnInit,
} from '@angular/core';

import { PockemonService } from '../services/pockemon/pockemon.service';
import { Subscription } from 'rxjs';

import { Pockemon } from '../../Interfases';
import { ViewService } from '../services/view/view.service';
// import { LanguageService } from '../services/language/language.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pockemon-board',
  templateUrl: './pockemon-board.component.html',
  styleUrls: ['./pockemon-board.component.scss'],
})
export class PockemonBoardComponent implements OnInit {
  pockemons: Pockemon[] = [];
  private style$: Subscription;
  style: string = '';

  constructor(
    private pockemonService: PockemonService,
    private viewService: ViewService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.style$ = this.viewService.getStyleObservable().subscribe( style => this.style = style);
    this.viewService.sendStyle();

    this.route.queryParams.subscribe( params => {
      const { pockemon } = params
      this.pockemons = pockemon ? 
        this.pockemonService.getBySubString(pockemon) : 
        this.pockemonService.getAll() ;
    });
  }

  ngOndestroy(): void {
    this.style$.unsubscribe();
  }

  onAction(pockemonId: number): void {
    this.pockemonService.pockemonAction(pockemonId);
  }

}
