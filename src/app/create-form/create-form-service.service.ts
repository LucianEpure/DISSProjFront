import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class CreateFormService {

  private sendNewsUrl: string;
  private data: Array<string>;
 
  constructor(private http: HttpClient) {
    this.sendNewsUrl = 'http://localhost:8080/sendNews';
  }
  
  public submit(username: string, subject:string, content: string) {
    this.data = [username, subject, content];
    return this.http.post<Array<string>>(this.sendNewsUrl, this.data);
  }


}