import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { RegisterContainerComponent } from './register-container/register-container.component';
import { Space2Component } from './space2/space2.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [RegisterComponent, RegisterContainerComponent, Space2Component, SignUpFormComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    SharedModule
  ]
})
export class RegisterModule { }
