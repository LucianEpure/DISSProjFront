import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { SharedModule } from '../shared/shared.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  declarations: [EmployeesComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    SharedModule,
    Ng2SmartTableModule
  ]
})
export class EmployeesModule { }
