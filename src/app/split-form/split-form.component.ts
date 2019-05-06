import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'sf-split-form',
  template: `
    <form [formGroup]="contactInformationForm">
      <sf-name formControlName="name"></sf-name>
      <sf-address formControlName="address"></sf-address>
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
