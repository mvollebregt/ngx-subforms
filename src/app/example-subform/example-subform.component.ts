import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {useAsSubform} from 'ngx-subforms';


@Component({
  selector: 'app-example-subform',
  templateUrl: './example-subform.component.html',
  ...useAsSubform
})
export class ExampleSubformComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      text: [],
      requiredText: ['', Validators.required]
    });
  }
}
