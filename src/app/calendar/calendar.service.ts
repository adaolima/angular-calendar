import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment as env } from 'src/environments/environment'
import { ICalendar, ICalendarInfo } from './calendar'

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private readonly API = `${env.calendarURL}/api`
  private readonly ROUTE_TOKEN = env.routeTOKEN

  constructor(private http: HttpClient) { }
  
  getID(){
    return this.http.post<ICalendarInfo>(`${this.API}/calendars/info`, { url: this.ROUTE_TOKEN })
  }

  getEvents(id: number) {
    return this.http.get<ICalendar>(`${this.API}/calendars/${id}/events`)
  }
}
