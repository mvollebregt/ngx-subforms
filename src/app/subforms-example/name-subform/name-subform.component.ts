import {Component, OnInit, Renderer2} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {useAsSubform, Subform} from 'ngx-subforms';

@Component({
  selector: 'app-name-subform',
  templateUrl: './name-subform.component.html',
  ...useAsSubform(NameSubformComponent)
})
export class NameSubformComponent extends Subform {

  constructor(private formBuilder: FormBuilder, renderer: Renderer2) {
    super(renderer);
    this.formGroup = this.formBuilder.group({
      firstName: [],
      lastName: ['', Validators.required]
    });
  }
}
