import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'account-details-form',
  template: `
  <form [formGroup]="accountDetailsForm" (ngSubmit)="onSubmit(accountDetailsForm.value)">

      <div class="form__group form__group--input">
        <label for="username">Username</label>
        <input type="text" id="username" [formControl]="accountDetailsForm.controls['username']">
        <span *ngIf="accountDetailsForm.controls['username'].hasError('required') && accountDetailsForm.controls['username'].touched">Required field</span>
      </div>

      <div class="form__group form__group--input">
        <label for="fname">First Name</label>
        <input type="text" id="fname" [formControl]="accountDetailsForm.controls['fname']">
        <span *ngIf="accountDetailsForm.controls['fname'].hasError('required') && accountDetailsForm.controls['fname'].touched">Required field</span>
      </div>

      <div class="form__group form__group--input">
        <label for="username">Last Name</label>
        <input type="text" id="lname" [formControl]="accountDetailsForm.controls['lname']">
        <span *ngIf="accountDetailsForm.controls['lname'].hasError('required') && accountDetailsForm.controls['lname'].touched">Required field</span>
      </div>

      <div class="form__group form__group--submit">
        <button type="submit" [disabled]="!accountDetailsForm.valid">Submit</button>
      </div>

    </form>
  `
})
export class AccountDetailsForm {

  accountDetailsForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.accountDetailsForm = fb.group({
      'username': ['', Validators.required],
      'fname': ['', Validators.required],
      'lname': ['', Validators.required]
    });
  }

  onSubmit(value: any) {
    console.log(value);
  }
}
