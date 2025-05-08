import { TestBed } from '@angular/core/testing';

import { DoctortodaysappserviceService } from './doctortodaysappservice.service';

describe('DoctortodaysappserviceService', () => {
  let service: DoctortodaysappserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctortodaysappserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
