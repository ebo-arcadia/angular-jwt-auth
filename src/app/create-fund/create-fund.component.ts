import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { FundAttributes } from './fund-attributes';
import { FundAttributesService } from './fund-attributes.service';

@Component({
  selector: 'app-create-fund',
  templateUrl: './create-fund.component.html',
  styleUrls: ['./create-fund.component.css']
})
export class CreateFundComponent implements OnInit {
  createFundForm: FormGroup | any = null;
  fundStatus = ["launched", "pre-launch"];
  fundAttributes: FundAttributes[] = [];

  constructor(private fundAttributesService: FundAttributesService) { }

  ngOnInit() {
    this.fundAttributes = this.fundAttributesService.getFundAttributes();

    this.createFundForm = new FormGroup({
      fundName: new FormControl(null, Validators.required),
      benchmark: new FormControl(null, Validators.required),
      fundStatus: new FormControl(null, Validators.required),
      attributeName: new FormControl(null, Validators.required),
      watchThisFund: new FormControl(null, Validators.required)
    });

    this.createFundForm.valueChanges.subscribe((value: any) => {
      next: console.log(value);
    });
  }

  buttonType: string | any;

  onSubmit(buttonType: any): void {
    if (buttonType === "Create Fund") {
      this.onPrintValueInConsoleClick()
    };
    if (buttonType === "Set Fund") {
      this.onSetValueClick()
    };
    if (buttonType === "Patch Fund") {
      this.onPatchValueClick()
    };
    if (buttonType === "Reset Fund") {
      this.onResetValueClick()
    };
  }

  onPrintValueInConsoleClick() {
    console.log(this.createFundForm.value);
  }

  onSetValueClick() {
    this.createFundForm.setValue({
      fundName: "vanguard gold",
      benchmark: "sleeve gold",
      fundStatus: "launched",
      attributeName: "ETF",
      watchThisFund: true
    });
  }

  onPatchValueClick() {
    this.createFundForm.patchValue({
      fundName: "all weather"
    });
  }

  onResetValueClick() {
    this.createFundForm.reset();
  }

}
