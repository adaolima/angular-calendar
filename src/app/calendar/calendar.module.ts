import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarComponent } from './calendar.component';
import { MonthModule } from './month/month.module';

@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    MonthModule,
  ],
  exports: [
    CalendarComponent
  ]
})
export class CalendarModule { }
