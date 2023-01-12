import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BackendService } from 'src/app/shared/service/backend.service';

import League from '@model/League';
import { LeagueServiceInterface } from '@domain/league-service-interface';

@Injectable()
export class LeagueService extends BackendService implements LeagueServiceInterface {

  searchByTerm(term: string): Observable<League[]>{
    return this.http.get(this.baseUrl + '/league/searchByName/' + term) as Observable<League[]>;
  }

  getDetails(league: League): Observable<League>{
    return this.http.get(this.baseUrl + '/league/' + league._id) as Observable<League>;
  }
}
