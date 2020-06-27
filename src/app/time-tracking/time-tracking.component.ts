import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import * as AppActions from '../state/app.actions';
import * as fromApp from '../state/app.reducer';
import { Store } from '@ngrx/store';
import {TimeTracking} from './time-tracking'
import {TimeTrackingService} from './time-tracking-service.service'

@Component({
  selector: 'app-time-tracking',
  templateUrl: './time-tracking.component.html',
  styleUrls: ['./time-tracking.component.scss']
})


export class TimeTrackingComponent implements OnInit {
  settings;
  
  timeTrackings: TimeTracking[];

  constructor(private store: Store<fromApp.State>, private timeTrackingService: TimeTrackingService,
    private cdr : ChangeDetectorRef) { }

  toggleSidebar(event) {
    this.store.dispatch(AppActions.toggleSidebar({ data: event }));
  }

  ngOnInit(): void {

    this.settings =
     {
      columns: {
        startDate: {
          title: "Start time",
          filter: false
        },
        endDate: {
          title: "End time",
          filter: false
        },
        workedHours: {
          title: "Worked hours",
          filter: false
        }
      },
      // delete: {
      //   confirmDelete: true
      // },
      // add: {
      //   confirmCreate: true
      // },
      // edit: {
      //   confirmSave: true
      // },
      actions: {
        add: false,
        edit: false,
        delete: false
      },
      mode: "internal"
    };
    let username = sessionStorage.getItem('username')
    this.timeTrackingService.findAll(username).subscribe(data => {
      this.timeTrackings = data;
    });
    this.cdr.detectChanges();
  }

}
