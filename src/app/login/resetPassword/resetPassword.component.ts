import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `
  Reset Password
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
