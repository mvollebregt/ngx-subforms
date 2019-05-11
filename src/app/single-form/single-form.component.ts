import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-single-form',
  template: `
    <form [formGroup]="contactInformationForm">

      <ng-container formGroupName="name">
        <input formControlName="firstName">
        <input formControlName="lastName">
      </ng-container>

      <ng-container formGroupName="address">
        <input formControlName="street">
        <input formControlName="number">
        <input formControlName="zipCode">
        <input formControlName="city">
        <input formControlName="country">
      </ng-container>

    </form>

    {{ contactInformationForm.touched }}
  `
})
export class SingleFormComponent implements OnInit {

  contactInformationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.contactInformationForm = this.formBuilder.group({
      name: this.formBuilder.group({
        firstName: ['a', [Validators.required, Validators.minLength(3)]],
        lastName: []
      }),
      address: this.formBuilder.group({
        street: [],
        number: [],
        zipCode: [],
        city: [],
        country: []
      })
    });
    // console.log(this.contactInformationForm.get(['name', 'firstName']).errors);
  }
}
