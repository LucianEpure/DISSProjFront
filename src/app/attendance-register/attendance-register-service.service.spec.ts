import { TestBed } from '@angular/core/testing';

import { AttendanceRegisterService } from './attendance-register-service.service';

describe('AttendanceRegisterServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AttendanceRegisterService = TestBed.get(AttendanceRegisterService);
    expect(service).toBeTruthy();
  });
});