import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarComponent } from './calendar.component';
import { WeekModule } from './week/week.module';

@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    WeekModule,
  ],
  exports: [
    CalendarComponent
  ]
})
export class CalendarModule { }
