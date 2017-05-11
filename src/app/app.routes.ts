import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';

import { LoginGuard } from './guards/login.guard';

export const ROUTES: Routes = [
  { path: 'home',  component: HomeComponent, canActivate: [LoginGuard] },
  { path: '', loadChildren: './login#LoginModule' },
  { path: '**',    component: NoContentComponent },
];
