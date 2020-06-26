import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Information} from './information';

@Injectable({
  providedIn: 'root'
})
export class InformationService {
  private informationUrl: string;

  constructor(private http: HttpClient) {
    this.informationUrl = 'http://localhost:8080/messages/';
   }
   public findAll(username: string): Observable<Information[]> {
    return this.http.get<Information[]>(this.informationUrl+ username);
    //return this.http.get<Information[]>(this.informationUrl+ 'Emp1');
   }

}
