import { TestBed } from '@angular/core/testing';

import { FundInfoService } from './fund-info.service';

describe('FundInfoService', () => {
  let service: FundInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FundInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
