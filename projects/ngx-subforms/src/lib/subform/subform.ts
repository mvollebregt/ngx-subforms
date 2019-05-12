import {FormControlName, FormGroup} from '@angular/forms';
import {ElementRef, QueryList, ViewChildren} from '@angular/core';
import {SubformValueAccesor} from './subform-value-accesor';

export class Subform {

  formGroup: FormGroup;
  private subformValueAccessor: SubformValueAccesor;

  @ViewChildren(FormControlName, {read: ElementRef})
  set formControls(formControls: QueryList<ElementRef>) {
    if (!this.subformValueAccessor) {
      console.error(
        'No value accessor for the subform was provided. Did you forget to add ...useAsSubform(YourSubform) to your @Component decorator?');
    } else {
      this.subformValueAccessor.setFormControls(formControls.toArray());
    }
  }

  registerSubformValueAccessor(subformValueAccessor: SubformValueAccesor) {
    this.subformValueAccessor = subformValueAccessor;
    subformValueAccessor.setFormGroup(this.formGroup);
  }
}
