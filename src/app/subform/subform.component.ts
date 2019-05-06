import {AfterViewInit, Component, ContentChildren, ElementRef, Inject, Input, OnChanges, QueryList, SimpleChanges} from '@angular/core';
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
    @Inject(NG_VALUE_ACCESSOR) valueAccessors: SubformValueAccessor[]) {
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
