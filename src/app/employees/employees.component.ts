import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import * as AppActions from '../state/app.actions';
import * as fromApp from '../state/app.reducer';
import { Store } from '@ngrx/store';
import { LocalDataSource } from 'ng2-smart-table';
import { Employee } from './employee';
import { EmployeeService } from './employee-service.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  settings;

  employees: Employee[];
  //addedUser: User;
  constructor(private store: Store<fromApp.State>, private employeeService: EmployeeService,
    private cdr : ChangeDetectorRef) { }

  toggleSidebar(event) {
    this.store.dispatch(AppActions.toggleSidebar({ data: event }));
  }

  ngOnInit(): void {
    this.settings = 
      {
        columns: {
          username: {
            title: "Usename",
            filter: false
          },
          startDate: {
            title: "Start Date",
            filter: false
          },
          endDate: {
            title: "End Date",
            filter: false
          },
          workedHours: {
            title: "Worked Hours",
            filter: false
          }
        },
        /*delete: {
          confirmDelete: true
        },
        add: {
          confirmCreate: true
        },
        edit: {
          confirmSave: true
        },*/
        actions: {
          add: false,
          edit: false,
          delete: false
        },
        mode: "internal"
      };
  
    this.employeeService.findAll().subscribe(data => {
      this.employees = data;
    });
    this.cdr.detectChanges();
  }
/*
  onCreateConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      this.addedUser = event.newData;
      console.log(this.addedUser);
      this.userService.save(this.addedUser).subscribe(next => {
        event.confirm.reject();})
    } else {
      event.confirm.reject();
    }
  }
  onEditConfirm(event) {
    if (window.confirm('Are you sure you want to edit?')) {
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }
  onDeleteConfirm(event) {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }
*/
  

}