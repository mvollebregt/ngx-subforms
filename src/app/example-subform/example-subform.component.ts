import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {useAsSubform} from '../subform/subform';


@Component({
  selector: 'sf-example-subform',
  templateUrl: './example-subform.component.html',
  ...useAsSubform
})
export class ExampleSubformComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      text: []
    });
  }
}
