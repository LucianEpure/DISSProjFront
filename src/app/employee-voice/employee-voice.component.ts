import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as AppActions from '../state/app.actions';
import * as fromApp from '../state/app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-employee-voice',
  templateUrl: './employee-voice.component.html',
  styleUrls: ['./employee-voice.component.scss']
})
export class EmployeeVoiceComponent implements OnInit {

  constructor(private store: Store<fromApp.State>) { }

  toggleSidebar(event) {
    this.store.dispatch(AppActions.toggleSidebar({ data: event }));
  }

  ngOnInit(): void {
  }

}
