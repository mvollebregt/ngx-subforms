import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {MainFormComponent} from './main-form/main-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NameSubformComponent } from './name-subform/name-subform.component';
import { AddressSubformComponent } from './address-subform/address-subform.component';
import {SubformsModule} from 'ngx-subforms';

export const subformsExampleDeclarations = [ MainFormComponent, NameSubformComponent, AddressSubformComponent ];
export const subformsExampleImports = [CommonModule, ReactiveFormsModule, SubformsModule];

@NgModule({
  declarations: subformsExampleDeclarations,
  imports: [
    ...subformsExampleImports,
    RouterModule.forChild([{path: '**', component: MainFormComponent}])
  ]
})
export class SubformsExampleModule { }
