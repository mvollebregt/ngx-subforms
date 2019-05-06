import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'sf-example-form',
  templateUrl: './example-form.component.html'
})
export class ExampleFormComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      subformValue: []
    });
  }
}
