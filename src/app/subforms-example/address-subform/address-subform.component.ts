import {Component, OnInit, Renderer2} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {useAsSubform, Subform} from 'ngx-subforms';

@Component({
  selector: 'app-address-subform',
  templateUrl: './address-subform.component.html',
  ...useAsSubform(AddressSubformComponent)
})
export class AddressSubformComponent extends Subform {

  constructor(private formBuilder: FormBuilder, renderer: Renderer2) {
    super(renderer);
    this.formGroup = this.formBuilder.group({
      street: [],
      number: [],
      zipCode: [],
      city: [],
      country: []
    });
  }


}
