import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'sf-single-form',
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
  `
})
export class SingleFormComponent implements OnInit {

  contactInformationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.contactInformationForm = this.formBuilder.group({
      name: this.formBuilder.group({
        firstName: [],
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
  }
}
