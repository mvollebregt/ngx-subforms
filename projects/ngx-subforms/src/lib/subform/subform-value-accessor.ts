import {AbstractControl, ControlValueAccessor, FormGroup, ValidationErrors, Validator} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ElementRef, Renderer2} from '@angular/core';

export class SubformValueAccessor implements ControlValueAccessor, Validator {

  private formGroup: FormGroup;
  private onChange: any;
  private onTouched: any;
  private valueChangesSubscription: Subscription;

  constructor(private renderer: Renderer2) {
  }

  setFormGroup(formGroup: FormGroup) {
    this.formGroup = formGroup;
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
    if (obj) {
      // TODO: what should happen if !obj?
      this.formGroup.setValue(obj);
    }
  }

  registerOnValidatorChange(fn: () => void): void {
  }

  validate(control: AbstractControl): ValidationErrors | null {
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
    // TODO: what if !this.formGroup?
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
