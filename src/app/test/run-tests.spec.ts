import {FormGroup} from '@angular/forms';
import {SingleFormComponent} from '../single-form-example/single-form/single-form.component';
import {MainFormComponent} from '../subforms-example/main-form/main-form.component';
import {subformsExampleDeclarations, subformsExampleImports} from '../subforms-example/subforms-example.module';
import {singleFormExampleDeclarations, singleFormExampleImports} from '../single-form-example/single-form-example.module';
import {Type} from '@angular/core';

export interface ComponentUnderTest {
  formGroup: FormGroup;
}

interface TestSetup {
  type: Type<ComponentUnderTest>;
  description: string;
  module: any;
}

const subformsExample = {
  type: MainFormComponent,
  description: 'The subforms example',
  module: {declarations: subformsExampleDeclarations, imports: subformsExampleImports}
};

const singleFormExample = {
  type: SingleFormComponent,
  description: 'The single form example',
  module: {declarations: singleFormExampleDeclarations, imports: singleFormExampleImports}
};

function runTestsFor(testSetup: TestSetup, tests: (testCase: TestSetup) => void) {

  describe(testSetup.description, () => {
    tests(testSetup);
  });

}

export function runTests(tests: (testCase: TestSetup) => void) {

  runTestsFor(subformsExample, tests);
  runTestsFor(singleFormExample, tests);

}
