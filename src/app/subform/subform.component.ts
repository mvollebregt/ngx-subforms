import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  Inject,
  Input,
  OnChanges,
  Optional,
  QueryList,
  SimpleChanges
} from '@angular/core';
import {FormControlName, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {SubformValueAccessor} from './subform-value-accessor';

@Component({
  selector: 'sf-subform',
  templateUrl: './subform.component.html'
})
export class SubformComponent implements OnChanges, AfterViewInit {

  @Input() formGroup: FormGroup;

  @ContentChildren(FormControlName, {read: ElementRef}) formControls: QueryList<ElementRef>;

  private valueAccessor: SubformValueAccessor;

  constructor(
    @Optional() @Inject(NG_VALUE_ACCESSOR) valueAccessors: SubformValueAccessor[]) {
    if (!valueAccessors) {
      const error = new Error(
        'SubformProviderError: No value accessor was provided for the subform. ' +
        'Did you forget to add \'...useAsSubform\' to your @Component?');
      error.name = 'SubformProviderError';
      throw error;
    }
    // TODO: check that the correct value accessor is provided
    [this.valueAccessor] = valueAccessors;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.formGroup) {
      this.valueAccessor.setFormGroup(changes.formGroup.currentValue);
    }
  }

  ngAfterViewInit(): void {
    // TODO: listen for changes on formControls?
    this.valueAccessor.setFormControls(this.formControls.toArray());
  }

}
