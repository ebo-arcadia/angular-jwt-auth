import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';
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

  fundInfoForm: FormGroup | any = null;

  constructor(private fundAttributesService: FundAttributesService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.fundAttributes = this.fundAttributesService.getFundAttributes();

    this.createFundForm = this.formBuilder.group({
      fundName: ['', [Validators.required, Validators.minLength(4)]],
      benchmark: ['', [Validators.required, Validators.minLength(4)]],
      fundStatus: ['', Validators.required],
      attributeName: ['', Validators.required],
      watchThisFund: ['', Validators.required],
      customizedFundAttributes: this.formBuilder.array([])
    });

    // print input values to the console upon user entering data
    this.createFundForm.valueChanges.subscribe((value: any) => {
      next: console.log(value);
    });

    // nested form
    this.fundInfoForm = this.formBuilder.group({
      fundSpec: this.formBuilder.group({
        fundType: null,
        fundRegion: null,
        fundMarket: null
      })
    })

    // print fund info form input to the console upon user enterinf data
    this.fundInfoForm.valueChanges.subscribe((value: any) => { next: console.log(value)})

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
    this.createFundForm["submitted"] = true;
  }

  onSetValueClick() {
    this.createFundForm.setValue({
      fundName: "vanguard gold",
      benchmark: "sleeve gold",
      fundStatus: "launched",
      attributeName: "ETF",
      watchThisFund: true,
      customizedFundAttributes: []
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

  onSubmitFundInfo() {
    this.fundInfoForm.valueChanges.subscribe((value: any) => { console.log(value)})
  }

  onAddCustomizedFundAttribute() {
    var formGroup = this.formBuilder.group({
      attributeName: ['', [Validators.required, Validators.minLength(4)]],
      attributeScope: ['', [Validators.required, Validators.minLength(4)]]
    });

    (<FormArray>this.createFundForm.get('customizedFundAttributes')).push(formGroup);
  }

  OnRemoveCuztomizedFundAttribute(index: number) {
    (<FormArray>this.createFundForm.get('customizedFundAttributes')).removeAt(index);
  }

}
