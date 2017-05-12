import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SET_USER, RESET_USER } from '../reducers/user.reducer.ts';
import { User } from '../models/user.model';
import { Observable, BehaviorSubject, Subject } from 'rxjs/Rx';

interface AppState {
  user: User;
}

@Injectable()
export class AuthService {

  public user: Subject<User> = new BehaviorSubject<User>(new User());

  constructor(private store: Store<AppState>) {
    store.select('user').subscribe( (u:User) => {
      this.user.next(u);
    } );
  }

  login(username, password) {

    // talk to server

    // create user object
    let user = new User();
    user.id = '1';
    user.username = 'test username';
    user.fname = 'test first name';
    user.lname = 'test last name';

    // save to app state
    this.store.dispatch({ type: SET_USER, payload: user });
  }

  logout(): any {
    this.store.dispatch({ type: RESET_USER });
  }

}

export const AUTH_PROVIDERS: Array<any> = [
    AuthService
];
