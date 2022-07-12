import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn, ValidationErrors} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorsService {

  constructor() { }

  public minimumFundVolumeValidator(minFundVolume: number): ValidatorFn {
    return (formControl: AbstractControl): ValidationErrors | null => {
      if (!formControl.value) 
        return null;
      if (minFundVolume >= 100)
        return null;
      else
        return { minFundVolume: { valid: false }};
    };
  }

}
