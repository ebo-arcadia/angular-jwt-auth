import { Injectable } from '@angular/core';
import { FundAttributes } from './fund-attributes';

@Injectable({
  providedIn: 'root'
})
export class FundAttributesService {

  constructor() { }

  getFundAttributes(): FundAttributes[] {
    return [
      new FundAttributes(1, "ETF"),
      new FundAttributes(2, "Mutual Fund"),
      new FundAttributes(3, "Fixed Income")
    ]
  }
}
