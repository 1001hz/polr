/**
 * Angular decorators and services
 */
import {
  Component,
  ViewEncapsulation
} from '@angular/core';

import { AuthService } from './services';
import { User } from './models/user.model';
import { Observable } from 'rxjs/Rx';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <nav>
      <a [routerLink]=" ['./'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Login
      </a>
      <a [routerLink]=" ['./signup'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Signup
      </a>
      <a [routerLink]=" ['./forgot-password'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Forgot Password
      </a>
      <a [routerLink]=" ['./reset-password'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Reset Password
      </a>
      <a [routerLink]=" ['./app'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}"
        *ngIf="(user | async)?.id">
        Home
      </a>
      <a [routerLink]=" ['./app/account'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}"
        *ngIf="(user | async)?.id">
        Account
      </a>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer>
      FOOTER
    </footer>
  `
})
export class AppComponent {

  public user: Observable<User>;

  constructor(private authService: AuthService) {
    this.user = this.authService.user;
  }

}
