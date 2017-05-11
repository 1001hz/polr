import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgotPassword/forgotPassword.component'
import { ResetPasswordComponent } from './resetPassword/resetPassword.component';

import { ROUTES } from './login.routes';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    RouterModule.forChild(ROUTES)
  ]
})
export class LoginModule {

}
