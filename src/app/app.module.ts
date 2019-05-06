import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ExampleSubformComponent} from './example-subform/example-subform.component';
import {ExampleFormComponent} from './example-form/example-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SubformComponent} from './subform/subform.component';
import {SingleFormComponent} from './single-form/single-form.component';
import {SplitFormComponent} from './split-form/split-form.component';
import {NameComponent} from './name/name.component';
import {AddressComponent} from './address/address.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleSubformComponent,
    ExampleFormComponent,
    SubformComponent,
    SingleFormComponent,
    SplitFormComponent,
    NameComponent,
    AddressComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
