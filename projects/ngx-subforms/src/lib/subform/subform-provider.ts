import {NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';
import {forwardRef} from '@angular/core';

// TODO: type: Type
export function subformProviders(type) {
  return [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => type),
    multi: true
  }, {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => type),
    multi: true
  }];
}

export function useAsSubform(type) {
  return {providers: subformProviders(type)};
}
