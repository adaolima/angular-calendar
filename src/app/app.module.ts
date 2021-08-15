import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeekModule } from './week/week.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WeekModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
