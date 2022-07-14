import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn, ValidationErrors, FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorsService {

  constructor() { }

  public createValidFundSerialNumber(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value
      if (!value) {return null;}

      const hasUpperCase = /[A-Z]+/.test(value);
      const hasLowerCase = /[a-z]+/.test(value);
      const hasNumeric = /[0-9]+/.test(value);

      const strongFundSerialNumber = hasUpperCase && hasLowerCase && hasNumeric

      return !strongFundSerialNumber ? { hasStrongFundSerialNumber:true } : null;
    };
  }

}
