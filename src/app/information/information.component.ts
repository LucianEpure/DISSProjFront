import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import * as AppActions from '../state/app.actions';
import * as fromApp from '../state/app.reducer';
import { Store } from '@ngrx/store';
import { Information } from './information';
import { InformationService } from './information.service';
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformationComponent implements OnInit {

  informations: Information[];
  constructor(private store: Store<fromApp.State>, private informationService: InformationService,
    private cdr : ChangeDetectorRef) { }

  toggleSidebar(event) {
    this.store.dispatch(AppActions.toggleSidebar({ data: event }));
  }

  ngOnInit(): void {
    //Emp1 should be replaced with the username of the logged user
    this.informationService.findAll('Emp1').subscribe(data => {
      this.informations = data;
    });
    this.cdr.detectChanges();
  }

}
