import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SingleFormComponent} from './single-form/single-form.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {SubformsModule} from 'ngx-subforms';

export const singleFormExampleDeclarations = [SingleFormComponent];
export const singleFormExampleImports = [CommonModule, ReactiveFormsModule, SubformsModule];

@NgModule({
  declarations: singleFormExampleDeclarations,
  imports: [
    ...singleFormExampleImports,
    RouterModule.forChild([{path: '**', component: SingleFormComponent}])
  ]
})
export class SingleFormExampleModule { }
