import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UPDATE_USER } from '../reducers/user.reducer';
import { User } from '../models/user.model';
import { Observable, BehaviorSubject, Subject } from 'rxjs/Rx';
import { ApiService } from './api.service';

interface AppState {
  user: User;
}

@Injectable()
export class UserService {

  constructor(
    private store: Store<AppState>,
    private apiService: ApiService
  ){}

  update(user: User) {

    let update$ = this.apiService.apiPost('/api/user', {user: user}, true)
      .map((response) => {

        // create user object
        let user = new User();
        user.makeFromApiData(response);

        // save to app state
        this.store.dispatch({ type: UPDATE_USER, payload: user });

      })
      .share();

    return update$;

  }

  changePassword(currentPassword: string, newPassword: string) {

    let update$ = this.apiService.apiPost('/api/user/password', { "current": currentPassword, "new": newPassword }, true)
      .share();

    return update$;

  }
}

export const USER_PROVIDERS: Array<any> = [
  UserService
];
