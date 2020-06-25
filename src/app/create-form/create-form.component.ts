import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as AppActions from '../state/app.actions';
import * as fromApp from '../state/app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateFormComponent implements OnInit {

  constructor(private store: Store<fromApp.State>) { }

  toggleSidebar(event) {
    this.store.dispatch(AppActions.toggleSidebar({ data: event }));
  }

  ngOnInit(): void {
  }

}
