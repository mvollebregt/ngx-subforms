import {Component, forwardRef, OnInit} from '@angular/core';
import {AbstractFormGroupControl} from '../lib/abstract-form-group-control';
import {FormBuilder, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-example-form-group-control',
  templateUrl: './example-form-group-control.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ExampleFormGroupControlComponent),
    multi: true
  }]
})
export class ExampleFormGroupControlComponent extends AbstractFormGroupControl implements OnInit {

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      text: []
    });
  }
}
