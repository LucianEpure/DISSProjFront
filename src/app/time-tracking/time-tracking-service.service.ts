import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {TimeTracking} from './time-tracking';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TimeTrackingService {

  private timeTrackingsUrl: string;

  constructor(private http: HttpClient) {
    this.timeTrackingsUrl = 'http://localhost:8080/timesheetsForHr'; }

    public findAll(): Observable<TimeTracking[]> {
      return this.http.get<TimeTracking[]>(this.timeTrackingsUrl);
    }
}
