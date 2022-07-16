import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn, ValidationErrors, FormControl} from '@angular/forms';

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

  public createStrongPasswordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value
      if (!value) { return null;}
      const hasUpperCase = /[A-Z]+/.test(value);
      const hasLowerCase = /[a-z]+/.test(value);
      const hasNumeric = /[0-9]+/.test(value);
      const strongPasswordPattern = hasUpperCase && hasLowerCase && hasNumeric

      return !strongPasswordPattern ? {strongPassword: true} : null;
    }
  }

  public compareValidator(controlToValidate: string, controlToCompare: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      if (!(formGroup.get(controlToValidate) as FormControl).value) return null;
      if ((formGroup.get(controlToValidate) as FormControl).value == (formGroup.get(controlToCompare) as any).value) return null;
      else {
        (formGroup.get(controlToCompare) as FormControl).setErrors({ compareValidator: { valid: false }});
        return { compareValidator: {valid: false}};
      }
    }
  }

}
