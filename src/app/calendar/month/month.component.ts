import { Component, OnInit, Input } from '@angular/core';
import { ICalendar } from '../calendar';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss']
})
export class MonthComponent implements OnInit {

  @Input() listEvents: ICalendar[]
  @Input() public year: number = 2021
  @Input() public month: any = {
    name: 'August',
    days: 30,
    startOn: 2 // 1 - 7
  }
  public currentDay: number = 16
  public grid: number[] = new Array(35)

  constructor() { }

  ngOnInit() {
  }

}
