import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { MessageComponent } from './components/message/message.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundPageComponent,
    MessageComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    MessageComponent,
  ]
})
export class CoreModule { }
