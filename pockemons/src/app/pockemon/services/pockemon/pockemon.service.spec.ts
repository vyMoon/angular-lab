import { TestBed } from '@angular/core/testing';

import { PockemonService } from './pockemon.service';

describe('PockemonService', () => {
  let service: PockemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PockemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
