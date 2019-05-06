import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ExampleSubformComponent} from './example-subform/example-subform.component';
import {ExampleFormComponent} from './example-form/example-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SubformComponent} from './subform/subform.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleSubformComponent,
    ExampleFormComponent,
    SubformComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
