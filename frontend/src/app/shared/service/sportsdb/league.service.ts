import { Injectable } from '@angular/core';
import { LeagueServiceInterface } from '@domain/league-service-interface';
import League from '@model/League';
import { map, Observable, of } from 'rxjs';
import { SportsdbBackendService } from './sportsdb-backend.service';

@Injectable()
export class LeagueService extends SportsdbBackendService implements LeagueServiceInterface {

  searchByTerm(term: string): Observable<League[]> {
    return this.http.get(this.baseUrl + '/all_leagues.php')
    .pipe(
      map((data: any) => data.leagues.map((current: any) => mapToLeague(current)))
    );
  }

  getDetails(league: League): Observable<League> {
    return of<any>({
      _id: league._id,
      name: league._id,
    });
  }
}

function mapToLeague(league: any): League{
  return {
    _id: league.strLeague,
    name: league.strLeague
  }
}