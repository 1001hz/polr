import { Component } from '@angular/core';
import { LeagueService, AuthService } from '../../../services';
import { League } from '../../../models/league.model';
import { User } from '../../../models/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `
    <h1>{{ league.name }}</h1>
    <div *ngIf="user._id === league.ownerId">
      <a routerLink="../../league/edit/{{league._id}}"
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Edit {{ league.name }}
      </a>
    </div>
    <div>
    Next round closing:
    </div>
  `
})
export class ViewLeagueComponent {

  public league: League;
  public user: User;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private leagueService: LeagueService) {

    route.params.subscribe( params => {

      this.leagueService.getById(params['leagueId']).subscribe( league => {
        this.league = league;
        console.log(league);
      });
    });

    this.authService.user.subscribe( user => {
      this.user = user;
    })
  }
}
