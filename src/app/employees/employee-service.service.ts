import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeesUrl: string;
  //private addUserUrl: string;
 
  constructor(private http: HttpClient) {
    this.employeesUrl = 'http://localhost:8080/timesheetsForHr';
    //this.addUserUrl = 'http://localhost:8080/addUser';
  }
  public findAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl);
  }

  /*public save(employee: Employee) {
    console.log("Saving" + employee.username);
    return this.http.post<Employee>(this.addUserUrl, employee);
  }*/
}
