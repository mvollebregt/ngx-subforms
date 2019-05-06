import {Component, ElementRef, Inject, Input, OnChanges, QueryList, SimpleChanges, ViewChildren} from '@angular/core';
import {FormControlName, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {SubformValueAccessor} from './subform-value-accessor';

@Component({
  selector: 'sf-subform',
  templateUrl: './subform.component.html'
})
export class SubformComponent implements OnChanges {

  @Input() formGroup: FormGroup;

  @ViewChildren(FormControlName, {read: ElementRef}) formControls: QueryList<ElementRef>;

  private valueAccessor: SubformValueAccessor;

  constructor(
    @Inject(NG_VALUE_ACCESSOR) valueAccessors: SubformValueAccessor[]) {
    [this.valueAccessor] = valueAccessors;
    // TODO: check that the correct value accessor is provided
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.formGroup) {
      this.valueAccessor.setFormGroup(changes.formGroup.currentValue);
    }
  }
}
