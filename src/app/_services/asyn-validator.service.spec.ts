import { TestBed } from '@angular/core/testing';

import { AsynValidatorService } from './asyn-validator.service';

describe('AsynValidatorService', () => {
  let service: AsynValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsynValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
