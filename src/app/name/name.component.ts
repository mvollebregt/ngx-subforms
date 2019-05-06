import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {useAsSubform} from '../subform/subform';

@Component({
  selector: 'sf-name',
  templateUrl: './name.component.html',
  ...useAsSubform
})
export class NameComponent implements OnInit {

  private name: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.name = this.formBuilder.group({
      firstName: [],
      lastName: []
    });
  }

}
