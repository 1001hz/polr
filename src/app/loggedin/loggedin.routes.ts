import { HomeComponent } from './home/home.component';

export const ROUTES = [
  { path: '', component: HomeComponent },
  { path: 'account', loadChildren: './account#AccountModule' }
];
