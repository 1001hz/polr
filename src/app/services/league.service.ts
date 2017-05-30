import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, BehaviorSubject, Subject } from 'rxjs/Rx';
import { League } from '../models/league.model';
import { ADD_LEAGUE, DROP_LEAGUES } from '../reducers/league.reducer';
import { leagueSingleModel } from '../reducers/league.reducer';
import { ApiService } from './api.service';
import { MessageService } from './message.service';

interface AppState {
  league: League;
}

@Injectable()
export class LeagueService {

  public leagues: Subject<Array<League>> = new BehaviorSubject<Array<League>>(new Array<League>());

  constructor(
    private store: Store<AppState>,
    private apiService: ApiService,
    private messageService: MessageService
  ) {
    store.select('leagues').subscribe( (leagues:Array<League>) => {
      this.leagues.next(leagues);
    } );
  }

  create(leagueFormData): any {

    leagueFormData.startDate = new Date(leagueFormData.startDate+" 00:00:00").getTime();

    return this.apiService.apiPost('/api/league', leagueFormData, true)
      .map((response) => {
        let newLeague = new League();
        newLeague.makeFromApiData(response);

        this.store.dispatch({ type: ADD_LEAGUE, payload: newLeague });

        this.messageService.success("Your new league has been created");

        return response;
      })
      .share();

  }

  joinLeague(leagueCode): any {

    return this.apiService.apiPost('/api/league/join', {leagueCode: leagueCode}, true)
      .map((response) => {
        let newLeague = new League();
        newLeague.makeFromApiData(response);

        this.store.dispatch({ type: ADD_LEAGUE, payload: newLeague });

        this.messageService.success("You have successfully joined " + newLeague.name);

        return response;
      })
      .share();

  }

  fetchLeagues() {
    return this.apiService.apiGet('/api/leagues', true)
      .map((response) => {

        this.store.dispatch({ type: DROP_LEAGUES });

        response.map( league => {
          let newLeague = new League();
          newLeague.makeFromApiData(league);
          this.store.dispatch({ type: ADD_LEAGUE, payload: newLeague });
        });

        return response;
      })
      .share();
  }

  getById(leagueId) {
    return this.leagues.let(leagueSingleModel(leagueId));
  }

}

export const LEAGUE_PROVIDERS: Array<any> = [
  LeagueService
];
