import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { CalendarService } from './calendar.service'

import { ICalendarEvents } from './calendar'
import { LocalStorageService } from '../shared/local-storage.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent implements OnInit {

  eventsList: ICalendarEvents[]
  calendarId: number;

  constructor(
    private calendarService: CalendarService, 
    private localStorageService: LocalStorageService
  ) { }

  async ngOnInit() {

    // Temporaly to not take to much requests
    if(this.localStorageService.get('calendarId')) {
      this.calendarId = this.localStorageService.get('calendarId')
    } else {
      this.calendarService.getID().subscribe(({ data }) => {
        this.localStorageService.set('calendarId', data.id)
        this.calendarId = data.id
      })
    }

    // Temporaly to not take to much requests
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
