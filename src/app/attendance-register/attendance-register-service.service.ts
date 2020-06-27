import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Employee } from '../employees/employee';

@Injectable({
  providedIn: 'root'
})
export class AttendanceRegisterService {

  private inUrl: string;
  private outUrl: string;
 
  constructor(private http: HttpClient) {
    this.inUrl = 'http://localhost:8080/timesheetCheckIn';
    this.outUrl = 'http://localhost:8080/timesheetCheckOut';
  }
  
  public in(username: string) {
    return this.http.post<String>(this.inUrl, username);
  }

  public out(username: string) {
    return this.http.post<String>(this.outUrl, username);
  }

}
