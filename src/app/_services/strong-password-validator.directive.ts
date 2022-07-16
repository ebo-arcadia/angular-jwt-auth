import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, NG_VALIDATORS, Validator } from '@angular/forms';
import { CustomValidatorsService } from "./custom-validators.service"

@Directive({
  selector: '[appStrongPasswordValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: StrongPasswordValidatorDirective,
    multi: true
  }]
})

export class StrongPasswordValidatorDirective implements Validator {

  constructor(private customValidatorsService: CustomValidatorsService) { }

  validate(control: AbstractControl): ValidationErrors | null {
      return this.customValidatorsService.createStrongPasswordValidator();
  }

}
