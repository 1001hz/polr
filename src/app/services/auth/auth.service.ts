import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  isLoggedIn(): boolean {
    return true;
  }

}

export const AUTH_PROVIDERS: Array<any> = [
    AuthService
];
