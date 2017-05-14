import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SET_USER, RESET_USER } from '../reducers/user.reducer.ts';
import { User } from '../models/user.model';
import { Observable, BehaviorSubject, Subject } from 'rxjs/Rx';
import { ApiService } from './api.service';

interface AppState {
  user: User;
}

@Injectable()
export class AuthService {

  public user: Subject<User> = new BehaviorSubject<User>(new User());

  constructor(
    private store: Store<AppState>,
    private apiService: ApiService
  ) {
    store.select('user').subscribe( (u:User) => {
      this.user.next(u);
    } );
  }

  tokenLogin(token) {

    return this.apiService.apiPost('/api/tokenlogin', {"token": token}, false)
      .map((response) => {

        // create user object
        let user = new User();
        user.makeFromApiData(response);

        // save to app state
        this.store.dispatch({ type: SET_USER, payload: user });
      })
      .share();
  }

  login(username, password) {

    // talk to server
    var credentials = {
      username: username,
      password: password
    };

    return this.apiService.apiPost('/api/login', credentials, false)
      .map((response) => {

        // create user object
        let user = new User();
        user.makeFromApiData(response);

        // save to app state
        this.store.dispatch({ type: SET_USER, payload: user });

        localStorage.setItem("polrtoken", user.token);
      })
      .share();
  }

  logout(): any {

    return this.apiService.apiGet('/api/user/logout', true)
      .map((response) => {
        this.store.dispatch({ type: RESET_USER });

        localStorage.removeItem("polrtoken");
      })
      .share();
  }

  signup(userCredentials): any {

    return this.apiService
      .apiPost('/api/open/user', userCredentials, false)
      .map((response) => {

        // create user object
        let user = new User();
        user.makeFromApiData(response);

        // save to app state
        this.store.dispatch({ type: SET_USER, payload: user });

        localStorage.setItem("polrtoken", user.token);
      })
      .share();
  }

}

export const AUTH_PROVIDERS: Array<any> = [
    AuthService
];
