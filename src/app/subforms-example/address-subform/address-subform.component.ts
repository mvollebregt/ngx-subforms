import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Subform, useAsSubform} from 'ngx-subforms';

@Component({
  selector: 'app-address-subform',
  templateUrl: './address-subform.component.html',
  ...useAsSubform(AddressSubformComponent)
})
export class AddressSubformComponent extends Subform {

  constructor(private formBuilder: FormBuilder) {
    super();
    this.formGroup = this.formBuilder.group({
      street: [],
      number: [],
      zipCode: [],
      city: [],
      country: []
    });
  }


}
