import {NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Provider, Renderer2} from '@angular/core';
import {SubformImplementation} from './subform-implementation';
import {SubformValueAccessor} from './subform-value-accessor';
import {SubformValidator} from './subform-validator';

export const subform: Provider = [{
  provide: SubformImplementation,
  useClass: SubformImplementation,
  deps: [Renderer2],
}, {
  provide: NG_VALUE_ACCESSOR,
  useClass: SubformValueAccessor,
  deps: [SubformImplementation],
  multi: true
},
  {
    provide: NG_VALIDATORS,
    useClass: SubformValidator,
    deps: [SubformImplementation],
  multi: true
  }
];

export const useAsSubform = {providers: [subform]};

// export function useAsSubform(componentClass: Type<any>): { providers: Provider[] } {
//   return {
//     providers: [{
//       provide: NG_VALUE_ACCESSOR,
//       useFactory: createSubformValueAccessor,
//       deps: [componentClass],
//       multi: true
//     }]
//   };
// }
//
// function createSubformValueAccessor(component: any): ControlValueAccessor {
//   return new SubformValueAccessor(component);
// }
//
