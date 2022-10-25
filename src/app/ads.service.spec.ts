import { TestBed } from '@angular/core/testing';

import { adsService } from './ads.service';

describe('adsService', () => {
  let service: adsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(adsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
