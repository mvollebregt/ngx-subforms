# Easier Angular subforms

This library aims to let you easily split an Angular form into multiple smaller
subform components, without the need of manually implementing the ControlValueAccessor
interface.

## The problem

With Angular reactive forms you can easily create forms. Sometimes, if you have
a component implementing a form, it's a good idea to split it into smaller 
components:

- If your form grows too large, you don't want the whole form in one single 
  component.
- If a part of the form is shared between different forms, you don't want to
  redefine that part each time. For example, if multiple forms in your 
  application use the exact same address, zip code and city fields, it's better
  to define those fields in a reusable subform component.
  
Below is an example of a form in a single component we would like to split into
smaller components. 
  
```TypeScript
@Component({
  selector: 'sf-single-form',
  template: `
    <form [formGroup]="contactInformationForm">

      <ng-container formGroupName="name">
        <input formControlName="firstName">
        <input formControlName="lastName">
      </ng-container>

      <ng-container formGroupName="address">
        <input formControlName="street">
        <input formControlName="number">
        <input formControlName="zipCode">
        <input formControlName="city">
        <input formControlName="country">
      </ng-container>

    </form>
  `
})
export class SingleFormComponent implements OnInit {

  contactInformationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.contactInformationForm = this.formBuilder.group({
      name: this.formBuilder.group({
        firstName: [],
        lastName: []
      }),
      address: this.formBuilder.group({
        street: [],
        number: [],
        zipCode: [],
        city: [],
        country: []
      })
    });
  }
}
```  

There are a number of ways to 
[implement nested forms](https://blog.angularindepth.com/angular-nested-reactive-forms-using-cvas-b394ba2e5d0d).
The best way to use a component as a subform is to define it as a custom form
control. This way, it will be part of you larger form. If you set the value of
the whole form, the fields in your subform will automatically be set with it.
Also, validation will work for the whole form, including your subform. 

Using a component as a custom form control requires you to let it implement the
[ControlValueAccessor](https://angular.io/api/forms/ControlValueAccessor) 
interface, and to provide it as an 
[NG_VALUE_ACCESSOR](https://angular.io/api/forms/NG_VALUE_ACCESSOR) with your component.
A ControlValueAccessor defines the translation between your html component and
the Angular form:

- If the user enters values in your component, the ControlValueAccessor 
  tells the Angular form what its new value is.
- If the value of your Angular form is set programmatically, the 
  ControlValueAccessor determines how this value is shown in the html.
- If the html is touched by the user, the ControlValueAccessor tells the
  Angular form that it is touched.
- If your form control is disabled programmatically, the ControlValueAccessor
  determines how this is shown in the html.

Implementing a ControlValueAccessor requires you to do some not so simple and 
not so interesting programming. If you have a lot of subforms that are just
collections of text inputs, implementing the ControlValueAccessor comes down
to programming similar code every time.

This library makes it very easy to create subforms, without having to implement
the ControlValueAccessor interface by yourself.

## Creating a subform with this library

In the example above, we are going to define a subform NameComponent, combining
the first name and the last name fields. You could do exactly the same with the
remaining fields, and put them in a subform AddresComponent, but we will leave
that for your own exercise.

To create a subform component, you have to do three things:

- wrap your inputs in an <sf-subform> tag;
- tell angular you'd like to use it as a subform;
- use the subform component.

### 1. Wrap your inputs in an <sf-subform> tag

The html for your subform component is the same as the original html, but
wrapped in an <sf-subform> tag.

```html
<sf-subform [formGroup]="name">
  <input formControlName="firstName">
  <input formControlName="lastName">
</sf-subform>
```

In the TypeScript code for your component, you define just the firstName and
lastName fields:

```typescript
    this.name = this.formBuilder.group({
      firstName: [],
      lastName: []
    });
```

### 2. Tell your inputs you'd like to use it as a subform

Add ...useAsSubform to your @Component decorator:

```typescript
@Component({
  selector: 'sf-name',
  templateUrl: './name.component.html',
  ...useAsSubform
})
```

### 3. Use the subform component

You can now use the subform in your main form, without having to define the 
fields of the subform in the main form:

```typescript
@Component({
  selector: 'sf-split-form',
  template: `
    <form [formGroup]="contactInformationForm">
      <sf-name formControlName="name"></sf-name>
      <sf-address formControlName="address"></sf-address>
    </form>
  `
})
export class SplitFormComponent implements OnInit {

  contactInformationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.contactInformationForm = this.formBuilder.group({
      name: [],
      address: []
    });
  }
}
```

## Conclusion

With the above three steps, you can easily split large forms into smaller 
reusable components. If you use the library, the subform will work as expected
as a normal form control.

- If the user enters a value in the subform, it will be reflected in the main 
  form's value.
- If you programmatically set the value of the main form, it will be shown in 
  the subform.
- If the user touches an input in the subform, the main form will automatically 
  have status 'touched'.
- If the a value in the subform does not validate, the main form will 
  automatically have status 'invalid'.  
