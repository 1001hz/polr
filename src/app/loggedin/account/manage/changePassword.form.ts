import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'change-password-form',
  template: `
  <form [formGroup]="changePasswordForm" (ngSubmit)="onSubmit(changePasswordForm.value)">

      <div class="form__group form__group--input">
        <label for="current">Current Password</label>
        <input type="password" id="current" [formControl]="changePasswordForm.controls['current']">
        <span *ngIf="changePasswordForm.controls['current'].hasError('required') && changePasswordForm.controls['current'].touched">Required field</span>
      </div>

      <div class="form__group form__group--input">
        <label for="new">New Password</label>
        <input type="password" id="new" [formControl]="changePasswordForm.controls['new']">
        <span *ngIf="changePasswordForm.controls['new'].hasError('required') && changePasswordForm.controls['new'].touched">Required field</span>
      </div>

      <div class="form__group form__group--input">
        <label for="confirm">Confirm New Password</label>
        <input type="password" id="confirm" [formControl]="changePasswordForm.controls['confirm']">
        <span *ngIf="changePasswordForm.controls['confirm'].hasError('required') && changePasswordForm.controls['confirm'].touched">Required field</span>
      </div>

      <div class="form__group form__group--submit">
        <button type="submit" [disabled]="!changePasswordForm.valid">Submit</button>
      </div>

    </form>
  `
})
export class ChangePasswordForm {

  changePasswordForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.changePasswordForm = fb.group({
      'current': ['', Validators.required],
      'new': ['', Validators.required],
      'confirm': ['', Validators.required]
    });
  }

  onSubmit(value: any) {
    console.log(value);
  }
}
