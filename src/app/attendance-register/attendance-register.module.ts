import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRegisterRoutingModule } from './attendance-register-routing.module';
import { AttendanceRegisterComponent } from './attendance-register.component';
import { SharedModule } from '../shared/shared.module';
import { NbCalendarModule} from '@nebular/theme';


@NgModule({
  declarations: [AttendanceRegisterComponent],
  imports: [
    CommonModule,
    AttendanceRegisterRoutingModule,
    SharedModule,
    NbCalendarModule
  ]
})
export class AttendanceRegisterModule { }
