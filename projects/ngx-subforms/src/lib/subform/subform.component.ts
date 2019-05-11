import {AfterViewInit, Component, ContentChildren, ElementRef, Input, OnChanges, Optional, QueryList, SimpleChanges} from '@angular/core';
import {FormControlName, FormGroup} from '@angular/forms';
import {SubformValueAccessor} from './subform-value-accessor';

@Component({
  selector: 'sf-subform',
  template: '<ng-content></ng-content>'
})
export class SubformComponent implements OnChanges, AfterViewInit {

  @Input() formGroup: FormGroup;

  @ContentChildren(FormControlName, {read: ElementRef}) formControls: QueryList<ElementRef>;

  constructor(
    @Optional() private valueAccessor: SubformValueAccessor) {
    if (!this.valueAccessor) {
      const error = new Error(
        'SubformProviderError: No value accessor was provided for the subform. ' +
        'Did you forget to add \'...useAsSubform\' to your @Component?');
      error.name = 'SubformProviderError';
      throw error;
    }
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
