import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private authService: AuthService) {

  }

  canActivate(): boolean {
      return this.authService.isLoggedIn();
  }
}

export const LOGIN_GUARD_PROVIDERS: Array<any> = [
  LoginGuard
];
