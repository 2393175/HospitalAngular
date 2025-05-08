import { TestBed } from '@angular/core/testing';

import { AddappointmentService } from './addappointment.service';

describe('AddappointmentService', () => {
  let service: AddappointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddappointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
