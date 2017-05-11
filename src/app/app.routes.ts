import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';


export const ROUTES: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: '', loadChildren: './login#LoginModule' },
  { path: '**',    component: NoContentComponent },
];
