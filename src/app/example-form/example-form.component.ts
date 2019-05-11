import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-example-form',
  templateUrl: './example-form.component.html'
})
export class ExampleFormComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      // TODO: subformValidator maken, waarin ik andere validators kan wrappen maar dan voor een subform
      subformValue: [''] // , () => ({parent: 'deze fout komt van de parent'})]
    });
  }
}
