import { TestBed } from '@angular/core/testing';

import { FundAttributesService } from './fund-attributes.service';

describe('FundAttributesService', () => {
  let service: FundAttributesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FundAttributesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
