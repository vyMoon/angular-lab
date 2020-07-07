import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PockemonHeaderComponent } from './pockemon-header/pockemon-header.component';
import { PockemonBoardComponent } from './pockemon-board/pockemon-board.component';
import { PockemonItemComponent } from './pockemon-item/pockemon-item.component';


@NgModule({
  declarations: [
    PockemonHeaderComponent,
    PockemonBoardComponent,
    PockemonItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PockemonHeaderComponent,
    PockemonBoardComponent
  ]
})
export class PockemonModule { }
