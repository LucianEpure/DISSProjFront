import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateFormRoutingModule } from './create-form-routing.module';
import { CreateFormComponent } from './create-form.component';
import { Space12Component } from './space12/space12.component';
import { SharedModule } from '../shared/shared.module';
import {NbRadioModule} from '@nebular/theme';
import {NbTabsetModule} from '@nebular/theme';

@NgModule({
  declarations: [CreateFormComponent, Space12Component],
  imports: [
    CommonModule,
    CreateFormRoutingModule,
    SharedModule,
    NbRadioModule,
    NbTabsetModule
  ]
})
export class CreateFormModule { }
