import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UPDATE_USER } from '../reducers/user.reducer';
import { User } from '../models/user.model';
import { Observable, BehaviorSubject, Subject } from 'rxjs/Rx';

interface AppState {
  user: User;
}

@Injectable()
export class UserService {

  constructor(private store: Store<AppState>){}

  update(user: User) {
    this.store.dispatch({ type: UPDATE_USER, payload: user });
  }
}

export const USER_PROVIDERS: Array<any> = [
  UserService
];
