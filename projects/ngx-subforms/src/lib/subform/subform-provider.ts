import {NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Renderer2, Type} from '@angular/core';
import {SubformValueAccesor} from './subform-value-accesor';
import {Subform} from './subform';

export function subformProviders(type: Type<Subform>) {
  return [{
    provide: SubformValueAccesor,
    useClass: SubformValueAccesor,
    deps: [type, Renderer2]
  }, {
    provide: NG_VALUE_ACCESSOR,
    useExisting: SubformValueAccesor,
    multi: true
  }, {
    provide: NG_VALIDATORS,
    useExisting: SubformValueAccesor,
    multi: true
  }];
}

export function useAsSubform(type: Type<Subform>) {
  return {providers: subformProviders(type)};
}
