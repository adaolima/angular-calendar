import { Component, OnInit } from '@angular/core';

import { CalendarService } from './calendar.service'

import { ICalendarEvents } from './calendar'

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  eventsList: ICalendarEvents[]
  id: number

  constructor(private calendarService: CalendarService) { }

  async ngOnInit() {
    this.calendarService.getID().subscribe(({ data }) => {
      this.calendarService.getEvents(data.id).subscribe(({ data }) => {
        this.eventsList = data.items
      })
    })
    
  }

}
