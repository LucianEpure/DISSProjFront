import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'Log-in', loadChildren: () => import('./log-in/log-in.module').then(m => m.LogInModule) },
  { path: 'Register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  { path: 'Attendance-Register', loadChildren: () => import('./attendance-register/attendance-register.module').then(m => m.AttendanceRegisterModule) },
  { path: 'Information', loadChildren: () => import('./information/information.module').then(m => m.InformationModule) },
  { path: 'Time-Tracking', loadChildren: () => import('./time-tracking/time-tracking.module').then(m => m.TimeTrackingModule) },
  { path: 'Employee-voice', loadChildren: () => import('./employee-voice/employee-voice.module').then(m => m.EmployeeVoiceModule) },
  { path: 'Employees-voice', loadChildren: () => import('./employees-voice/employees-voice.module').then(m => m.EmployeesVoiceModule) },
  { path: 'Employees', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) },
  { path: 'Create-form', loadChildren: () => import('./create-form/create-form.module').then(m => m.CreateFormModule) },
  { path: '', redirectTo: 'Log-in', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
