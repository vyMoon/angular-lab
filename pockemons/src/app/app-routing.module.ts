import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { PockemonBoardComponent } from './pockemon/pockemon-board/pockemon-board.component';
import { PockemonDetailsComponent } from './pockemon/pockemon-details/pockemon-details.component';
import { NotFoundPageComponent } from './core/not-found-page/not-found-page.component';

const routes: Routes = [
  {path: 'board', component: PockemonBoardComponent, data: {animation: 'Board'}},
  {path: 'pockemon/:id', component: PockemonDetailsComponent, data: {animation: 'Details'}},
  {path: '404', component: NotFoundPageComponent, data: {animation: 'NotFound'}},
  {path: '', redirectTo: '/board', pathMatch: 'full'},
  {path: '**', component: NotFoundPageComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
