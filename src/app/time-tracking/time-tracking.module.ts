import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeTrackingRoutingModule } from './time-tracking-routing.module';
import { TimeTrackingComponent } from './time-tracking.component';
import { SharedModule } from '../shared/shared.module';
import {NbDatepickerModule} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
@NgModule({
  declarations: [TimeTrackingComponent],
  imports: [
    CommonModule,
    TimeTrackingRoutingModule,
    SharedModule,
    NbDatepickerModule,
    Ng2SmartTableModule
  ]
})
export class TimeTrackingModule { }
