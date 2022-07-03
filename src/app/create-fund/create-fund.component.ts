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
  accessScopes = ["unrestricted", "internal", "limited", "confidential", "public", "specific"];
  fundAttributes: FundAttributes[] = [];

  constructor(private fundAttributesService: FundAttributesService) { }

  ngOnInit() {
    this.fundAttributes = this.fundAttributesService.getFundAttributes();

    this.createFundForm = new FormGroup({
      fundName: new FormControl(null, Validators.required),
      benchmark: new FormControl(null, Validators.required),
      accessScope: new FormControl(null, Validators.required),
      attributeName: new FormControl(null, Validators.required),
      launchStatus: new FormControl(null, Validators.required)
    });
  }

}
