import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ComponentUnderTest, runTests} from './run-tests.spec';

runTests(testSetup => {

  let fixture: ComponentFixture<ComponentUnderTest>;
  let component: ComponentUnderTest;
  let firstName: HTMLInputElement;

  beforeEach(async(() => TestBed.configureTestingModule(testSetup.module).compileComponents()));

  beforeEach(() => {
    fixture = TestBed.createComponent(testSetup.type);
    component = fixture.componentInstance;
    fixture.detectChanges();
    firstName = getInput('firstName');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.formGroup).toBeTruthy();
  });

  it('should have the correct value after entering a value for the name field', () => {
    firstName.value = 'my first name';
    firstName.dispatchEvent(new Event('input'));
    expect(component.formGroup.value.name.firstName).toEqual('my first name');
  });

  it('should display the correct value after setting the value for the name field programmatically', () => {
    // With patchValue, I also HAVE to provide the last name, which is different from the single form. TODO: document this
    component.formGroup.patchValue({name: {firstName: 'my first name', lastName: ''}});
    fixture.detectChanges();
    expect(firstName.value).toBe('my first name');
  });

  it('should have status touched after a blur event', () => {
    firstName.dispatchEvent(new Event('blur'));
    expect(component.formGroup.touched).toBeTruthy();
  });

  it('should return an error if fields are required and it was initialized empty', () => {
    expect(component.formGroup.valid).toBeFalsy();
  });

  it('should return an error if an empty value was given for a required last name field', () => {
    component.formGroup.patchValue({name: {firstName: '', lastName: ''}});
    expect(component.formGroup.valid).toBeFalsy();
  });

  it('should not return an error if a valid value was given for a required last name field', () => {
    component.formGroup.patchValue({name: {firstName: '', lastName: 'non empty'}});
    expect(component.formGroup.valid).toBeTruthy();
  });

  function getInput(formControlName: string): HTMLInputElement {
    return fixture.nativeElement.querySelector(`input[formControlName="${formControlName}"`);
  }
});
