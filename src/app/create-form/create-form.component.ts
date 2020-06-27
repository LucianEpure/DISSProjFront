import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import * as AppActions from '../state/app.actions';
import * as fromApp from '../state/app.reducer';
import { Store } from '@ngrx/store';
import { CreateFormService } from './create-form-service.service'
import { Message } from './message';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {
  // news = {
  //   subject: "",
  //   content: ""
  // };
  // message: Message;

  constructor(private store: Store<fromApp.State>, private createFormService: CreateFormService,
    private cdr : ChangeDetectorRef) { }

  toggleSidebar(event) {
    this.store.dispatch(AppActions.toggleSidebar({ data: event }));
  }

  ngOnInit(): void {
    this.cdr.detectChanges();
  }

  sendNews(subject: string, content: string) {
    let username = sessionStorage.getItem('username')
    this.createFormService.submit(username, subject, content).subscribe();
  }

}
