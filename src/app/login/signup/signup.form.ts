import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'signup-form',
  template: `
    <form [formGroup]="signupForm" (ngSubmit)="onSubmit(signupForm.value)">

      <div class="form__group form__group--input">
        <label for="username">Username</label>
        <input type="text" id="username" [formControl]="signupForm.controls['username']">
        <span *ngIf="signupForm.controls['username'].hasError('required') && signupForm.controls['username'].touched">Required field</span>
      </div>

      <div class="form__group form__group--input">
        <label for="password">Password</label>
        <input type="password" id="password" [formControl]="signupForm.controls['password']">
        <span *ngIf="signupForm.controls['password'].hasError('required') && signupForm.controls['password'].touched">Required field</span>
      </div>

      <div class="form__group form__group--input">
        <label for="confirm">Confirm Password</label>
        <input type="confirm" id="confirm" [formControl]="signupForm.controls['confirm']">
        <span *ngIf="signupForm.controls['confirm'].hasError('required') && signupForm.controls['confirm'].touched">Required field</span>
        <span *ngIf="signupForm.controls['confirm'].value !== signupForm.controls['password'].value && signupForm.controls['password'].touched">Passwords don't match</span>
      </div>

      <div class="form__group form__group--submit">
        <button type="submit" [disabled]="!signupForm.valid">Submit</button>
      </div>

    </form>
  `
})
export class SignupForm {

  signupForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.signupForm = fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
      'confirm': ['', Validators.required]
    });
  }

  onSubmit(value: string) {
    console.log('Form value', value);
  }
}
