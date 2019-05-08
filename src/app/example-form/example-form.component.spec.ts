import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ExampleFormComponent} from './example-form.component';
import {ExampleSubformComponent} from '../example-subform/example-subform.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SubformComponent} from '../subform/subform.component';

describe('ExampleFormComponent', () => {
  let component: ExampleFormComponent;
  let fixture: ComponentFixture<ExampleFormComponent>;
  let textInput: HTMLInputElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleFormComponent, ExampleSubformComponent, SubformComponent],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    textInput = fixture.nativeElement.querySelector('#text');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('after entering a value in the form', () => {

    it('should have the value of a text input', () => {
      textInput.value = 'text value';
      textInput.dispatchEvent(new Event('input'));
      // TODO: patchValue does not work here. Does it work for a single form with groups?
      expect(component.formGroup.value).toEqual({subformValue: {requiredText: '', text: 'text value'}});
    });

  });

  describe('after setting the value programmatically', () => {

    it('should display a text value', () => {
      // TODO: patchValue does not work here. Does it work for a single form with groups?
      component.formGroup.setValue({subformValue: {requiredText: '', text: 'text value'}});
      fixture.detectChanges();
      expect(textInput.value).toBe('text value');
    });
  });

  describe('after touching the form', () => {

    it('should have status touched', () => {
      textInput.dispatchEvent(new Event('focus'));
      expect(component.formGroup.touched).toBeTruthy();
    });

  });

  describe('inner validation', () => {

    it('should return an error if validation fails', () => {
      // TODO: patchValue does not work here. Does it work for a single form with groups?
      component.formGroup.setValue({subformValue: {text: '', requiredText: ''}});
      expect(component.formGroup.valid).toBeFalsy();
    });

    it('should not return an error if validation success', () => {
      // TODO: patchValue does not work here. Does it work for a single form with groups?
      component.formGroup.setValue({subformValue: {text: '', requiredText: 'required'}});
      expect(component.formGroup.valid).toBeTruthy();

    });
  });



});
