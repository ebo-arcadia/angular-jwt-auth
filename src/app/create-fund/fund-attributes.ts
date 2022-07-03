export class FundAttributes {
    attributeID: number | any = null;
    attributeName: string | any = null;

    constructor(attributeIDParam: number, attributeNameParam: string) {
        this.attributeID = attributeIDParam;
        this.attributeName = attributeNameParam;    
    }
}
