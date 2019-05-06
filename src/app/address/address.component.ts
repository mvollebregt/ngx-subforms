import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {useAsSubform} from '../subform/subform';

@Component({
  selector: 'sf-address',
  templateUrl: './address.component.html',
  ...useAsSubform
})
export class AddressComponent implements OnInit {

  private address: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.address = this.formBuilder.group({
      street: [],
      number: [],
      zipCode: [],
      city: [],
      country: []
    });
  }

}
