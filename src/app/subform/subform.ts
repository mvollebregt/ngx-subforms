import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {Provider} from '@angular/core';
import {SubformValueAccessor} from './subform-value-accessor';

export const subform: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useClass: SubformValueAccessor,
  multi: true
};

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
