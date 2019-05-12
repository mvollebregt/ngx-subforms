import {AbstractControl, ControlValueAccessor, FormGroup, ValidationErrors, Validator} from '@angular/forms';
import {Subform} from './subform';
import {ElementRef, Renderer2} from '@angular/core';
import {Subscription} from 'rxjs';

export class SubformValueAccesor implements ControlValueAccessor, Validator {

  constructor(subform: Subform, private renderer: Renderer2) {
    subform.registerSubformValueAccessor(this);
  }

  private formGroup: FormGroup;

  private onChange: any;
  private onTouched: any;
  private onValidatorChange: () => void;

  private valueChangesSubscription: Subscription;
  private control: AbstractControl;

  private value: any;

  setFormGroup(formGroup: FormGroup) {
    this.formGroup = formGroup;
    if (this.value) {
      this.formGroup.setValue(this.value);
    }
    this.registerValueChangesWithOnChange();
  }

  setFormControls(formControls: ElementRef[]) {
    formControls.forEach(control => {
      this.renderer.listen(control.nativeElement, 'blur', this.onTouched);
    });
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
    this.registerValueChangesWithOnChange();
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    // TODO: what if formGroup is not initialized yet?
    this.value = obj;
    if (this.formGroup && obj) {
      // TODO: what should happen if !obj?
      this.formGroup.setValue(obj);
    }
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onValidatorChange = fn;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    this.control = control;
    const allErrors = {};
    if (this.formGroup) {
      // TODO: recursive?
      for (const key of Object.keys(this.formGroup.controls)) {
        const errors = this.formGroup.controls[key].errors;
        if (errors) {
          allErrors[key] = errors;
        }
      }
    }
    // TODO: what if !this.formGroup? use function parameter "control"?
    return !this.formGroup || this.formGroup.valid ? null : {invalidForm: allErrors};
  }

  private registerValueChangesWithOnChange() {
    if (this.valueChangesSubscription) {
      this.valueChangesSubscription.unsubscribe();
    }
    if (this.formGroup && this.onChange) {
      this.valueChangesSubscription = this.formGroup.valueChanges.subscribe(this.onChange);
      // TODO: unsubscribe on destroy
    }
  }
}
