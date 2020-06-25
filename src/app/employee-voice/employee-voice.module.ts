import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeVoiceRoutingModule } from './employee-voice-routing.module';
import { EmployeeVoiceComponent } from './employee-voice.component';
import { SharedModule } from '../shared/shared.module';
import {NbRadioModule} from '@nebular/theme';

@NgModule({
  declarations: [EmployeeVoiceComponent],
  imports: [
    CommonModule,
    EmployeeVoiceRoutingModule,
    SharedModule,
    NbRadioModule
  ]
})
export class EmployeeVoiceModule { }
