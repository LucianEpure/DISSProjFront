import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import * as AppActions from '../state/app.actions';
import * as fromApp from '../state/app.reducer';
import { Store } from '@ngrx/store';
import { LocalDataSource } from 'ng2-smart-table';
import { User } from './employee';
import { UserService } from './employee-service.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesComponent implements OnInit {
  settings;

  users: User[];
  source =   [
    {
      employeeName: "Danielle Kennedy",
      date: "4/27/2020",
      startTime: "09:46",
      endTime: "19:42",
      workedHours: "09:55"
    },
    {
      employeeName: "Russell Payne",
      date: "4/28/2020",
      startTime: "08:16",
      endTime: "18:51",
      workedHours: "10:35"
    },
    {
      employeeName: "Brenda Hanson",
      date: "4/28/2020",
      startTime: "09:54",
      endTime: "19:37",
      workedHours: "09:42"
    },
    {
      employeeName: "Nathan Knight",
      date: "4/28/2020",
      startTime: "09:54",
      endTime: "19:02",
      workedHours: "09:08"
    }
  ];

  constructor(private store: Store<fromApp.State>, private userService: UserService,
    private cdr : ChangeDetectorRef) { }

  toggleSidebar(event) {
    this.store.dispatch(AppActions.toggleSidebar({ data: event }));
  }

  ngOnInit(): void {
    this.settings = 
      {
        columns: {
          id: {
            title: "ID",
            filter: false
          },
          username: {
            title: "Username",
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
          add: true,
          edit: true,
          delete: true
        },
        mode: "internal"
      };
  
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
    this.cdr.detectChanges();
  }

}
