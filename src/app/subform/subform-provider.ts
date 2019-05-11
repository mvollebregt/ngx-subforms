import {NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Provider, Renderer2} from '@angular/core';
import {SubformValueAccessor} from './subform-value-accessor';

export const subformProvider: Provider = [{
  provide: SubformValueAccessor,
  useClass: SubformValueAccessor,
  deps: [Renderer2],
}, {
  provide: NG_VALUE_ACCESSOR,
  useExisting: SubformValueAccessor,
  multi: true
},
  {
    provide: NG_VALIDATORS,
    useExisting: SubformValueAccessor,
    multi: true
  }
];

export const useAsSubform = {providers: [subformProvider]};
