import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';
import { PockemonBoardComponent } from './pockemon-board/pockemon-board.component';
import { PockemonItemComponent } from './pockemon-item/pockemon-item.component';
import { PockemonDetailsComponent } from './pockemon-details/pockemon-details.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    PockemonBoardComponent,
    PockemonItemComponent,
    PockemonDetailsComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
    PockemonBoardComponent
  ]
})
export class PockemonModule { }
