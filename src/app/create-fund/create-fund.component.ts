import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-fund',
  templateUrl: './create-fund.component.html',
  styleUrls: ['./create-fund.component.css']
})
export class CreateFundComponent implements OnInit {
  createFundForm: FormGroup | any = null;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.createFundForm = new FormControl({
      fundName: new FormControl('e.g. S&P 500', Validators.required)
    })
  }

  onSubmit() { console.log(this.createFundForm)};

}
