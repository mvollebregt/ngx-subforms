import {FormControlName, FormGroup} from '@angular/forms';
import {ElementRef, QueryList, ViewChildren} from '@angular/core';
import {SubformValueAccesor} from './subform-value-accesor';

// TODO: https://mariusschulz.com/blog/typescript-2-2-mixin-classes?
export class Subform {

  formGroup: FormGroup;
  private subformValueAccessor: SubformValueAccesor;

  @ViewChildren(FormControlName, {read: ElementRef})
  set formControls(formControls: QueryList<ElementRef>) {
    this.subformValueAccessor.setFormControls(formControls.toArray());
  }

  registerSubformValueAccessor(subformValueAccessor: SubformValueAccesor) {
    this.subformValueAccessor = subformValueAccessor;
    subformValueAccessor.setFormGroup(this.formGroup);
  }
}
