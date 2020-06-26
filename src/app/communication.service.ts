import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable()
export class CommunicationService {

  // Observable string sources
  private notificationSource = new Subject<string>();

  // Observable string streams
  notificationSource$ = this.notificationSource.asObservable();

  // Service message commands
  sendNotification() {
    this.notificationSource.next();
  }
}