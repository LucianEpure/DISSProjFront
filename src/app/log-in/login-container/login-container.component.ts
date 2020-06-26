import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LoginService } from 'src/app/LoginService';
import { Router } from '@angular/router';
import { CommunicationService } from 'src/app/communication.service';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent implements OnInit {
  userDetails = {
    username: "",
    password: "" };
  invalidLogin = false

  constructor(private router: Router,
    private loginService: LoginService, private communicationService: CommunicationService
  ) { }

  ngOnInit(): void {
    let role = sessionStorage.getItem('role')
    if (role !== null) {
      if (role === "EMPLOYEE") {
        this.router.navigate(['/Attendance-Register'])
      }
      else if (role === "HR"){
        this.router.navigate(['/Employees'])
      }
    }
  }

  checkLogin() {
    this.loginService.authenticate(this.userDetails.username, this.userDetails.password, (result)=>{
      if (result)
        {
          this.communicationService.sendNotification();
          let role = sessionStorage.getItem('role')
          if (role !== null && role === "EMPLOYEE") {
            this.router.navigate(['/Attendance-Register'])
          }
          else if (role !== null && role === "HR"){
            this.router.navigate(['/Employees'])
          }
          this.invalidLogin = false;
        } else{
          this.invalidLogin = true;
        }
    });
    
  }

}
