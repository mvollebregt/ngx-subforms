import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Subform, useAsSubform} from 'ngx-subforms';

@Component({
  selector: 'app-name-subform',
  templateUrl: './name-subform.component.html',
  ...useAsSubform(NameSubformComponent)
})
export class NameSubformComponent extends Subform {

  constructor(private formBuilder: FormBuilder) {
    super();
    this.formGroup = this.formBuilder.group({
      firstName: [],
      lastName: ['', Validators.required]
    });
  }
}
