import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesVoiceComponent } from './employees-voice.component';


const routes: Routes = [
  { path: '', component: EmployeesVoiceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesVoiceRoutingModule { }
