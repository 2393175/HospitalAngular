import { TestBed } from '@angular/core/testing';

import { SlotserviceService } from './slotservice.service';

describe('SlotserviceService', () => {
  let service: SlotserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlotserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
