import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ICalendar, IMonth } from '../calendar';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss']
})
export class MonthComponent implements OnInit, OnChanges {

  @Input() listEvents: ICalendar[]
  @Input() public year: number = 2021
  @Input() public month: number = 8
  public currentDay: number = 16
  public grid: number[] = new Array(35)

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    const { name, days, startAt } = this.getMonthInfo(this.month, this.year)
  }

  getMonthInfo(month:number, year:number): IMonth {
    const d = new Date(year, month, 0)
    // return the number of days in a month/year
    return {
      name: d.toLocaleDateString('default', { month: 'long' }),
      days: d.getDate(),
      startAt: d.getDay() // start calendar day of week // 0 - 6 which 0 is Sunday and 6 is Saturday
    }
  }

}
