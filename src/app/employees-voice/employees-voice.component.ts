import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import * as AppActions from '../state/app.actions';
import * as fromApp from '../state/app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-employees-voice',
  templateUrl: './employees-voice.component.html',
  styleUrls: ['./employees-voice.component.scss']
})
export class EmployeesVoiceComponent implements OnInit {
  settings =   {
    columns: {
      fullName: {
        title: "Full Name",
        filter: false
      },
      email: {
        title: "Email",
        filter: false
      },
      dateSubmitted: {
        title: "Date submitted",
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
      custom: [
        {
          name: 'viewSubmission',
          title: '<img src="/assets/images/view.png">'
        }
      ],
      add: false,
      edit: false,
      delete: false
    },
    mode: "internal"
  };
  source =   [
    {
      fullName: "Danielle Kennedy",
      email: "danielle_91@example.com",
      dateSubmitted : "4/27/2020"
    },
    {
      fullName: "Russell Payne",
      email: "russell_88@example.com",
      dateSubmitted : "4/28/2020"
    },
    {
      fullName: "Brenda Hanson",
      email: "brenda97@example.com",
      dateSubmitted : "4/28/2020"
     }
    ,
    {
      fullName: "Nathan Knight",
      email: "nathan-85@example.com",
      dateSubmitted : "4/27/2020"
    }
  ];

  constructor(private store: Store<fromApp.State>, private cdr : ChangeDetectorRef) { }

  toggleSidebar(event) {
    this.store.dispatch(AppActions.toggleSidebar({ data: event }));
  }

  ngOnInit(): void {
    this.cdr.detectChanges();
  }

}
