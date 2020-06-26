import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeVoiceComponent } from './employee-voice.component';


const routes: Routes = [
  { path: '', component: EmployeeVoiceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeVoiceRoutingModule { }
