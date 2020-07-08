import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PockemonModule } from './pockemon/pockemon.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PockemonModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
