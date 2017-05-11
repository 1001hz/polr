import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResetPasswordForm } from './resetPassword.form';

@Component({
  template: `
  <h1>Reset Password</h1>
  <reset-password-form></reset-password-form>
  `
})
export class ResetPasswordComponent {

  key: string;

  constructor(private route: ActivatedRoute) {

    // get the key to verify a valid password reset link
    route.params.subscribe( params => {
      this.key = params['key'];
    })
  }
}
