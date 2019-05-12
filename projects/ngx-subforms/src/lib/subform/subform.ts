import {FormControlName, FormGroup} from '@angular/forms';
import {ElementRef, QueryList, ViewChildren} from '@angular/core';
import {SubformValueAccessor} from './subform-value-accessor';

export class Subform {

  private _formGroup: FormGroup;
  private subformValueAccessor: SubformValueAccessor;

  get formGroup() {
    return this._formGroup;
  }

  set formGroup(formGroup: FormGroup) {
    this._formGroup = formGroup;
    if (this.subformValueActestcessor) {
      this.subformValueAccessor.setFormGroup(this.formGroup);
    }
  }

  @ViewChildren(FormControlName, {read: ElementRef})
  set formControls(formControls: QueryList<ElementRef>) {
    if (!this.subformValueAccessor) {
      console.error(
        'No value accessor for the subform was provided. Did you forget to add ...useAsSubform(YourSubform) to your @Component decorator?');
    } else {
      this.subformValueAccessor.setFormControls(formControls.toArray());
    }
  }

  registerSubformValueAccessor(subformValueAccessor: SubformValueAccessor) {
    this.subformValueAccessor = subformValueAccessor;
    subformValueAccessor.setFormGroup(this.formGroup);
  }
}
