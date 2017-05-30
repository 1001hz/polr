import { NewLeagueComponent } from './new/new-league.component';
import { EditLeagueComponent } from './edit/edit-league.component';
import { JoinLeagueComponent } from './join/join-league.component';
import { ViewLeagueComponent } from './view/view-league.component';

export const ROUTES = [
  { path: 'new', component: NewLeagueComponent },
  { path: 'edit/:leagueId', component: EditLeagueComponent },
  { path: 'join', component: JoinLeagueComponent },
  { path: ':leagueId', component: ViewLeagueComponent },
];
