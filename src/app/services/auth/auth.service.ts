import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  login(username, password): boolean {
    localStorage.setItem('username', username);
    return true;
  }

  logout(): any {
    localStorage.removeItem('username');
  }

  getUser(): any {
    return localStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }

}

export const AUTH_PROVIDERS: Array<any> = [
    AuthService
];
