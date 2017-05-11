/**
 * Angular decorators and services
 */
import {
  Component,
  ViewEncapsulation
} from '@angular/core';

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
      <a [routerLink]=" ['./home'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Home
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

  constructor(

  ) {}

}
