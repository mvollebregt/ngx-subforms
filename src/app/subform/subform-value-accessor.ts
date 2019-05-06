import {ControlValueAccessor, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ElementRef, Renderer2} from '@angular/core';

export class SubformValueAccessor implements ControlValueAccessor {

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
      this.renderer.listen(control.nativeElement, 'focus', this.onTouched);
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
    if (obj) {
      // TODO: what should happen if !obj?
      this.formGroup.setValue(obj);
    }
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
