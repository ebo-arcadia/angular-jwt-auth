import { Injectable } from '@angular/core';
import { FundInfo } from '../create-fund/fund-info';

@Injectable({
  providedIn: 'root'
})
export class FundInfoService {

  constructor() { }

  fundInfo: FundInfo[] = [];

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
