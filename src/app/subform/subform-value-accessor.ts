import {ControlValueAccessor} from '@angular/forms';
import {SubformImplementation} from './subform-implementation';

export class SubformValueAccessor implements ControlValueAccessor {

  constructor(private subformImplementation: SubformImplementation) {
  }

  registerOnChange(fn: any): void {
    this.subformImplementation.registerOnChange(fn);
  }

  registerOnTouched(fn: any): void {
    this.subformImplementation.registerOnTouched(fn);
  }

  setDisabledState(isDisabled: boolean): void {
    this.subformImplementation.setDisabledState(isDisabled);
  }

  writeValue(obj: any): void {
    this.subformImplementation.writeValue(obj);
  }
}
