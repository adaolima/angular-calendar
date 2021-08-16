import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment as env } from 'src/environments/environment'
import { IWeek, IWeekInfo } from './week'

@Injectable({
  providedIn: 'root'
})
export class WeekService {

  private readonly API = `${env.calendarURL}/api`
  private readonly ROUTE_TOKEN = `${env.calendarURL}${env.routeTOKEN}`

  constructor(private http: HttpClient) { }
  
  getID(){
    return this.http.post<IWeekInfo>(`${this.API}/calendars/info`, { url: this.ROUTE_TOKEN })
  }

  getEvents(id: number) {
    return this.http.get<IWeek>(`${this.API}/calendars/${id}/events`)
  }
}
