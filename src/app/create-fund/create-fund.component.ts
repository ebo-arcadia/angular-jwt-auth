import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-fund',
  templateUrl: './create-fund.component.html',
  styleUrls: ['./create-fund.component.css']
})
export class CreateFundComponent implements OnInit {
  createFundForm: FormGroup | any = null;
  accessScopes = ["unrestricted", "internal", "limited", "confidential", "public", "specific"]

  constructor() { }

  ngOnInit() {
    this.createFundForm = new FormGroup({
      fundName: new FormControl(null, Validators.required),
      benchmark: new FormControl(null, Validators.required),
      accessScope: new FormControl(null, Validators.required),
    });
  }

}
