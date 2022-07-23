import { Injectable } from '@angular/core';
import { FundInfo } from '../create-fund/fund-info';
import { of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FundInfoService {

  constructor() { }

  fundInfo: FundInfo[] = [];

  private existingFundNames = ['mutual fund 1', 'mutual fund 2', 'mutual fund 3'];

  checkIfFundExists(inputFundValue: string) {
    return of(this.existingFundNames.some(fundName => fundName === inputFundValue)).pipe(delay(1000));
  }

  addFundInfo(fundInfo: FundInfo) {
    this.fundInfo.push(fundInfo);
  }

  getFundInfo() {
    return this.fundInfo;
    // return this.fundInfo.map((fundInfo: any) => fundInfo.fundSpec)
  }

  clearFundInfoForm() {
    this.fundInfo = [];
  }
  
}
