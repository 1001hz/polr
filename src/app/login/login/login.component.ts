import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginForm } from './login.form';
import { AuthService } from '../../services';
import { User } from '../../models/user.model';
import { Observable, BehaviorSubject, Subject } from 'rxjs/Rx';

@Component({
  template: `
    <h1>Login</h1>
    <div *ngIf="!(user | async)?.id">
      <login-form></login-form>
    </div>
    <div *ngIf="(user | async)?.id">
      <p>You are logged in as {{ (user | async)?.username }}</p>
      <a (click)="logout()">Logout</a>
    </div>
  `
})
export class LoginComponent {

  public user: Observable<User>;

  constructor(private authService: AuthService) {
    this.user = this.authService.user;
  }

  logout() {
    this.authService.logout().subscribe();
  }
}
