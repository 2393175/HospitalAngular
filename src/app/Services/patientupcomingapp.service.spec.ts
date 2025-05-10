import { TestBed } from '@angular/core/testing';

import { PatientupcomingappService } from './patientupcomingapp.service';

describe('PatientupcomingappService', () => {
  let service: PatientupcomingappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientupcomingappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
