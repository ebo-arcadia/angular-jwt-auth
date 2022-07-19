import { ThisReceiver } from "@angular/compiler";

export class FundInfo {
    fundType: string | any = null;
    fundRegion: string | any = null;
    fundMarket: string | any = null;
    fundSerialNumber: string | any = null;

    constructor(fundTypeParam: string, fundRegionParam: string, fundMarketParam: string, fundSerialNumberParam: string) {
        this.fundType = fundTypeParam;
        this.fundRegion = fundRegionParam;
        this.fundMarket = fundMarketParam;
        this.fundSerialNumber = fundSerialNumberParam;
    }
}
