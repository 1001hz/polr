import { Component } from '@angular/core';
import { League } from '../../models/league.model';
import { LeagueService } from '../../services';
import { Observable } from 'rxjs/Rx';

@Component(
  {
    template: `
    <h2>Leagues</h2>
    <ul>
      <li *ngFor="let league of leagues">
        <a routerLink="./league/{{league._id}}"
          routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
          {{ league.name }}
        </a>
      </li>
    </ul>
    `,
    selector: '<league-list></league-list>'
  }
)
export class LeagueListComponent {
  public leagues;

  constructor(private leagueService: LeagueService){
    this.leagueService.leagues.subscribe( leagues => {
      this.leagues = leagues;
    });
  }
}
