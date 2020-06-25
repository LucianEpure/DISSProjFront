import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import * as AppActions from '../state/app.actions';
import * as fromApp from '../state/app.reducer';
import { Store } from '@ngrx/store';
import {TimeTracking} from './time-tracking'
import {TimeTrackingService} from './time-tracking-service.service'

@Component({
  selector: 'app-time-tracking',
  templateUrl: './time-tracking.component.html',
  styleUrls: ['./time-tracking.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class TimeTrackingComponent implements OnInit {
  settings;
  timeTrackings: TimeTracking[];
  
  source =   [
    {
      date: "4/27/2020",
      startTime: "09:46",
      endTime: "19:42",
      workedHours: "09:55"
    },
    {
      date: "4/28/2020",
      startTime: "08:16",
      endTime: "18:51",
      workedHours: "10:35"
    },
    {
      date: "4/29/2020",
      startTime: "09:54",
      endTime: "19:37",
      workedHours: "09:42"
    },
    {
      date: "4/30/2020",
      startTime: "09:54",
      endTime: "19:02",
      workedHours: "09:08"
    }
  ];

  constructor(private store: Store<fromApp.State>, private timeTrackingService: TimeTrackingService,
    private cdr : ChangeDetectorRef) { }

  toggleSidebar(event) {
    this.store.dispatch(AppActions.toggleSidebar({ data: event }));
  }

  ngOnInit(): void {
    this.settings =
     {
      columns: {
        startTime: {
          title: "Start time",
          filter: false
        },
        endTime: {
          title: "End time",
          filter: false
        },
        workedHours: {
          title: "Worked hours",
          filter: false
        }
      },
      delete: {
        confirmDelete: true
      },
      add: {
        confirmCreate: true
      },
      edit: {
        confirmSave: true
      },
      actions: {
        add: false,
        edit: false,
        delete: false
      },
      mode: "internal"
    };

    this.timeTrackingService.findAll().subscribe(data => {
      this.timeTrackings = data;
    });
    this.cdr.detectChanges();
  }

}
