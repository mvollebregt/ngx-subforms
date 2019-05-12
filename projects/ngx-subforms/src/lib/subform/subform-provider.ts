import {NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Renderer2} from '@angular/core';
import {SubformValueAccesor} from './subform-value-accesor';

// TODO: type: Type (must extends Subform)
export function subformProviders(type) {
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

export function useAsSubform(type) {
  return {providers: subformProviders(type)};
}
