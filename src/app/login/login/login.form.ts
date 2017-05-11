import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login-form',
  template: `
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit(loginForm.value)">

      <div class="form__group form__group--input">
        <label for="username">Username</label>
        <input type="text" id="username" [formControl]="loginForm.controls['username']">
        <span *ngIf="loginForm.controls['username'].hasError('required') && loginForm.controls['username'].touched">Required field</span>
      </div>

      <div class="form__group form__group--input">
        <label for="password">Password</label>
        <input type="password" id="password" [formControl]="loginForm.controls['password']">
        <span *ngIf="loginForm.controls['password'].hasError('required') && loginForm.controls['password'].touched">Required field</span>
      </div>

      <div class="form__group form__group--submit">
        <button type="submit" [disabled]="!loginForm.valid">Submit</button>
      </div>

    </form>
  `
})
export class LoginForm {

  loginForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  onSubmit(value: string) {
    console.log('Form value', value);
  }
}
