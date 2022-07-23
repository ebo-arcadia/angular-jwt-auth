import { Injectable } from '@angular/core';
import { AbstractControl,  AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { FundInfoService } from './fund-info.service';

@Injectable({
  providedIn: 'root'
})
export class AsynValidatorService {
  static checkIfExistingFundNames(fundInfoService: FundInfoService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return fundInfoService.checkIfFundExists(control.value).pipe(map((result: boolean) => result ? { fundNameAlreadyExists: true } : null ))
    }
  }

}
