import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-split-form',
  template: `
    <form [formGroup]="contactInformationForm">
      <app-name formControlName="name"></app-name>
      <app-address formControlName="address"></app-address>
    </form>
  `
})
export class SplitFormComponent implements OnInit {

  contactInformationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.contactInformationForm = this.formBuilder.group({
      name: [],
      address: []
    });
  }
}
