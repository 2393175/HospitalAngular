import { TestBed } from '@angular/core/testing';

import { MedhistserviceService } from './medhistservice.service';

describe('MedhistserviceService', () => {
  let service: MedhistserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedhistserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
