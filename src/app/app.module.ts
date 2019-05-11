import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'single-form', loadChildren: './single-form-example/single-form-example.module#SingleFormExampleModule'},
      {path: '**', loadChildren: './subforms-example/subforms-example.module#SubformsExampleModule'}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
