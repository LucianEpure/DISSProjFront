import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './log-in/User';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { callbackify } from 'util';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit {

  private usersUrl: string;
  user: User;

  constructor(private router: Router, private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users/';
  }

  ngOnInit(): void {
    
  }

  authenticate(username, password, callback) {

    this.getUserByUsername(username).subscribe(data => {
      this.user = data;

      if (this.user != null && this.user.password === password) {
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('role', this.user.roles[0].roleName);
        callback(true);
      } else {
        callback(false);
      }

      });
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  public getUserByUsername(username): Observable<User> {
    return this.http.get<User>(this.usersUrl + username);
  }

}