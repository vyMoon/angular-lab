import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PockemonBoardComponent } from './pockemon-board/pockemon-board.component';
import { PockemonItemComponent } from './pockemon-item/pockemon-item.component';


@NgModule({
  declarations: [
    PockemonBoardComponent,
    PockemonItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PockemonBoardComponent
  ]
})
export class PockemonModule { }
