import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reset-password-form',
  template: `
    <form [formGroup]="resetPasswordForm" (ngSubmit)="onSubmit(resetPasswordForm.value)">

      <div class="form__group form__group--input">
        <label for="password">Password</label>
        <input type="password" id="password" [formControl]="resetPasswordForm.controls['password']">
        <span *ngIf="resetPasswordForm.controls['password'].hasError('required') && resetPasswordForm.controls['password'].touched">Required field</span>
      </div>

      <div class="form__group form__group--input">
        <label for="confirm">Confirm Password</label>
        <input type="confirm" id="confirm" [formControl]="resetPasswordForm.controls['confirm']">
        <span *ngIf="resetPasswordForm.controls['confirm'].hasError('required') && resetPasswordForm.controls['confirm'].touched">Required field</span>
        <span *ngIf="resetPasswordForm.controls['confirm'].value !== resetPasswordForm.controls['password'].value && resetPasswordForm.controls['password'].touched">Passwords don't match</span>
      </div>

      <div class="form__group form__group--submit">
        <button type="submit" [disabled]="!resetPasswordForm.valid">Submit</button>
      </div>

    </form>
  `
})
export class ResetPasswordForm {

  resetPasswordForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.resetPasswordForm = fb.group({
      'password': ['', Validators.required],
      'confirm': ['', Validators.required]
    });
  }

  onSubmit(value: string) {
    console.log('Form value', value);
  }
}
