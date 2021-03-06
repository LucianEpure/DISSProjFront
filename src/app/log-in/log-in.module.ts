import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogInRoutingModule } from './log-in-routing.module';
import { LogInComponent } from './log-in.component';
import { LoginContainerComponent } from './login-container/login-container.component';
import { Space5Component } from './space5/space5.component';
import { SignUpForm1Component } from './sign-up-form1/sign-up-form1.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LogInComponent, LoginContainerComponent, Space5Component, SignUpForm1Component],
  imports: [
    CommonModule,
    LogInRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class LogInModule { }
