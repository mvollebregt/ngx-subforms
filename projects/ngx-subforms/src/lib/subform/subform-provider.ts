import {NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Renderer2, Type} from '@angular/core';
import {SubformValueAccessor} from './subform-value-accessor';
import {Subform} from './subform';

export function subformProviders(type: Type<Subform>) {
  return [{
    provide: SubformValueAccessor,
    useClass: SubformValueAccessor,
    deps: [type, Renderer2]
  }, {
    provide: NG_VALUE_ACCESSOR,
    useExisting: SubformValueAccessor,
    multi: true
  }, {
    provide: NG_VALIDATORS,
    useExisting: SubformValueAccessor,
    multi: true
  }];
}

export function useAsSubform(type: Type<Subform>) {
  return {providers: subformProviders(type)};
}
