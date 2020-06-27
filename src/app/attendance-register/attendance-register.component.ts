import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef  } from '@angular/core';
import * as AppActions from '../state/app.actions';
import * as fromApp from '../state/app.reducer';
import { Store } from '@ngrx/store';
import { AttendanceRegisterService } from './attendance-register-service.service'

@Component({
  selector: 'app-attendance-register',
  templateUrl: './attendance-register.component.html',
  styleUrls: ['./attendance-register.component.scss']
})
export class AttendanceRegisterComponent implements OnInit {

  constructor(private store: Store<fromApp.State>, private attendanceRegisterService: AttendanceRegisterService,
    private cdr : ChangeDetectorRef) { }

  toggleSidebar(event) {
    this.store.dispatch(AppActions.toggleSidebar({ data: event }));
  }

  ngOnInit(): void {
    this.cdr.detectChanges();
  }

  checkIn(event) {
    let username = sessionStorage.getItem('username')
    this.attendanceRegisterService.in(username).subscribe();
  }

  checkOut(event) {
    let username = sessionStorage.getItem('username')
    this.attendanceRegisterService.out(username).subscribe();
  }

}
