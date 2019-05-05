import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ExampleFormComponent} from './example-form.component';
import {ExampleFormGroupControlComponent} from '../example-form-group-control/example-form-group-control.component';
import {ReactiveFormsModule} from '@angular/forms';

describe('ExampleFormComponent', () => {
  let component: ExampleFormComponent;
  let fixture: ComponentFixture<ExampleFormComponent>;
  let textInput: HTMLInputElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleFormComponent, ExampleFormGroupControlComponent],
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
      expect(component.formGroup.value).toEqual({formGroupControlValue: {text: 'text value'}});
    });

  });

  describe('after setting the value programmatically', () => {

    it('should display a text value', () => {
      component.formGroup.setValue({formGroupControlValue: {text: 'text value'}});
      fixture.detectChanges();
      expect(textInput.value).toBe('text value');
    });
  });
});
