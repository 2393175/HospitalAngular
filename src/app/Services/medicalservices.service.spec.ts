import { TestBed } from '@angular/core/testing';

import { MedicalservicesService } from './medicalservices.service';

describe('MedicalservicesService', () => {
  let service: MedicalservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
