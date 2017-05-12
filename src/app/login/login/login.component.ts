import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginForm } from './login.form';
import { AuthService } from '../../services';

@Component({
  template: `
    <h1>Login</h1>
    <div *ngIf="!authService.isLoggedIn()">
      <login-form></login-form>
    </div>
    <div *ngIf="authService.isLoggedIn()">
      <a (click)="logout()">Logout</a>
    </div>
  `
})
export class LoginComponent {

  constructor(private authService: AuthService) {

  }

  logout() {
    this.authService.logout();
  }
}
