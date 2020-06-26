import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LoginService } from '../LoginService';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  private setLoggedIn(value: boolean): void {
    this.loginService.setLoggedIn(value);
  }

}
