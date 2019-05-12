import {AbstractControl, ControlValueAccessor, FormControlName, FormGroup, ValidationErrors, Validator} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ContentChildren, ElementRef, QueryList, Renderer2, ViewChildren} from '@angular/core';

// TODO: https://mariusschulz.com/blog/typescript-2-2-mixin-classes?
export class Subform implements ControlValueAccessor, Validator {

  private _formGroup: FormGroup;

  private onChange: any;
  private onTouched: any;
  private onValidatorChange: () => void;

  private valueChangesSubscription: Subscription;
  private control: AbstractControl;

  private value: any;

  get formGroup(): FormGroup {
    return this._formGroup;
  }

  set formGroup(value: FormGroup) {
    this._formGroup = value;
    if (this.value) {
      this.formGroup.setValue(this.value);
    }
    this.registerValueChangesWithOnChange();
    this.formGroup.valueChanges.subscribe(change => console.log('valueChanges', change));
  }

  @ViewChildren(FormControlName, {read: ElementRef})
  set formControls(formControls: QueryList<ElementRef>) {
    console.log('set formControls', formControls.toArray());
    formControls.forEach(control => {
      this.renderer.listen(control.nativeElement, 'blur', this.onTouched);
    });
  }

  // TODO: deze naar service verplaatsen?
  constructor(private renderer: Renderer2) {
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
    console.log('registerValueChangesWithOnChange', this.formGroup, this.onChange);
    if (this.valueChangesSubscription) {
      this.valueChangesSubscription.unsubscribe();
    }
    if (this.formGroup && this.onChange) {
      this.valueChangesSubscription = this.formGroup.valueChanges.subscribe(this.onChange);
      // TODO: unsubscribe on destroy
    }
  }
}
