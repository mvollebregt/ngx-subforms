import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {useAsSubform} from 'ngx-subforms';

@Component({
  selector: 'app-name-subform',
  templateUrl: './name-subform.component.html',
  ...useAsSubform
})
export class NameSubformComponent  {

  name: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.name = this.formBuilder.group({
      firstName: [],
      lastName: ['', Validators.required]
    });
  }
}
