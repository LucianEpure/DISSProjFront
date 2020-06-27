import { TestBed } from '@angular/core/testing';

import { TimeTrackingService } from './time-tracking-service.service';

describe('TimeTrackingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimeTrackingService = TestBed.get(TimeTrackingService);
    expect(service).toBeTruthy();
  });
});
