import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'forgot-password-form',
  template: `
    <form [formGroup]="forgotPasswordForm" (ngSubmit)="onSubmit(forgotPasswordForm.value)">

      <div class="form__group form__group--input">
        <label for="email">Email</label>
        <input type="text" id="email" [formControl]="forgotPasswordForm.controls['email']">
        <span *ngIf="forgotPasswordForm.controls['email'].hasError('required') && forgotPasswordForm.controls['email'].touched">Required field</span>
      </div>

      <div class="form__group form__group--submit">
        <button type="submit" [disabled]="!forgotPasswordForm.valid">Submit</button>
      </div>

    </form>
  `
})
export class ForgotPasswordForm {

  forgotPasswordForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.forgotPasswordForm = fb.group({
      'email': ['', Validators.required]
    });
  }

  onSubmit(value: string) {
    console.log('Form value', value);
  }
}
