import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {useAsSubform} from 'ngx-subforms';

@Component({
  selector: 'app-address-subform',
  templateUrl: './address-subform.component.html',
  ...useAsSubform
})
export class AddressSubformComponent {

  private address: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.address = this.formBuilder.group({
      street: [],
      number: [],
      zipCode: [],
      city: [],
      country: []
    });
  }


}
