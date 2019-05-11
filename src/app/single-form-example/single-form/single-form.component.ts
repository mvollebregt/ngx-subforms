import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-single-form',
  templateUrl: './single-form.component.html'
})
export class SingleFormComponent {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      name: this.formBuilder.group({
        firstName: [],
        lastName: ['', Validators.required]
      }),
      address: this.formBuilder.group({
        street: [],
        number: [],
        zipCode: [],
        city: [],
        country: []
      })
    });
  }
}
