import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesVoiceRoutingModule } from './employees-voice-routing.module';
import { EmployeesVoiceComponent } from './employees-voice.component';
import { SharedModule } from '../shared/shared.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  declarations: [EmployeesVoiceComponent],
  imports: [
    CommonModule,
    EmployeesVoiceRoutingModule,
    SharedModule,
    Ng2SmartTableModule
  ]
})
export class EmployeesVoiceModule { }
