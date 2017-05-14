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
import { Router } from '@angular/router';
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
    <message></message>
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
      <div *ngIf="(user | async)?._id">
        <a [routerLink]=" ['./app'] "
          routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
          Home
        </a>
        <a [routerLink]=" ['./app/account'] "
          routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
          Account
        </a>
      </div>
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


  constructor(
    private authService: AuthService,
    private router: Router
  ) {

    this.user = authService.user;

    // try and login using local stored token
    let token = localStorage.getItem("polrtoken");
    if(token) {
      authService.tokenLogin(token)
        .subscribe(
        ( data ) => {
          this.router.navigate(['app']);
        }
      );
    }
  }

}
