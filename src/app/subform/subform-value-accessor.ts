import {ControlValueAccessor, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';

export class SubformValueAccessor implements ControlValueAccessor {

  private formGroup: FormGroup;
  private onChange: any;
  private onTouched: any;
  private valueChangesSubscription: Subscription;

  setFormGroup(formGroup: FormGroup) {
    this.formGroup = formGroup;
    this.registerValueChangesWithOnChange();
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
