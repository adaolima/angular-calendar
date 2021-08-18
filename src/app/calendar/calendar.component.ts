import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { CalendarService } from './calendar.service'

import { ICalendarEvents } from './calendar'
import { LocalStorageService } from '../shared/local-storage.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  static readonly MONTHS: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dez']
  static readonly START_YEAR: number = 1900
  static readonly END_YEAR: number = new Date().getFullYear() + 1


  calendarId: number
  eventsList: ICalendarEvents[]


  constructor(
    private calendarService: CalendarService, 
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {

    // Temporarily to not take to much requests
    if(this.localStorageService.get('calendarId')) {
      this.calendarId = this.localStorageService.get('calendarId')
    } else {
      this.calendarService.getID().subscribe(({ data }) => {
        this.localStorageService.set('calendarId', data.id)
        this.calendarId = data.id
      })
    }

    // Temporarily to not take to much requests
    if(this.localStorageService.get('eventsList')) {
      this.eventsList = this.localStorageService.get('eventsList')
    } else {
      this.calendarService.getEvents(this.calendarId).subscribe(({ data }) => {
        this.eventsList = data.items
        this.localStorageService.set('eventsList', data.items)
      })
    }

  }

}
