import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services';

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

      <div *ngIf="serverError" class="form__group form__group--server-error">
        {{ serverError }}
      </div>

    </form>
  `
})
export class SignupForm {

  signupForm: FormGroup;
  public serverError: string;

  constructor(
    fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signupForm = fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
      'confirm': ['', Validators.required]
    });
  }

  onSubmit(value: any) {
    this.serverError = null;

    this
      .authService
      .signup({username: value.username, password: value.password})
      .subscribe(
        data => {
          this.router.navigate(['app']);
        },
        err => {
          this.serverError = err;
        }
    );
  }
}
