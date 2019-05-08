import {AbstractControl, ValidationErrors, Validator} from '@angular/forms';
import {SubformImplementation} from './subform-implementation';

export class SubformValidator implements Validator {

  constructor(private subformImplementation: SubformImplementation) {
  }

  registerOnValidatorChange(fn: () => void): void {
    this.subformImplementation.registerOnValidatorChange(fn);
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.subformImplementation.validate(control);
  }
}
