import { TestBed } from '@angular/core/testing';

import { AvalibleslotsService } from './avalibleslots.service';

describe('AvalibleslotsService', () => {
  let service: AvalibleslotsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvalibleslotsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
