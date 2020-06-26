import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LoginService } from '../LoginService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  // username = 'javainuse'
  // password = ''
  // invalidLogin = false

  constructor(
    // private router: Router,
    // private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  // checkLogin() {
  //   if (this.loginService.authenticate(this.username, this.password)
  //   ) {
  //     this.router.navigate([''])
  //     this.invalidLogin = false
  //   } else
  //     this.invalidLogin = true
  // }

}
