import { TestBed } from '@angular/core/testing';

import { TimeTrackingServiceService } from './time-tracking-service.service';

describe('TimeTrackingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimeTrackingServiceService = TestBed.get(TimeTrackingServiceService);
    expect(service).toBeTruthy();
  });
});
