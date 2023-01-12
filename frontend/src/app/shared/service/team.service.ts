import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BackendService } from '@service/backend.service';

import Team from '@model/Team';
import { TeamServiceInterface } from '@domain/team-service-interface';
import League from '@model/League';

@Injectable()
export class TeamService extends BackendService implements TeamServiceInterface {

  fetchByLeague(league: League): Observable<Team[]>{
    return this.http.get(this.baseUrl + '/team/forLeague/' + league._id) as Observable<Team[]>;
  }

  getDetails(team: Team): Observable<Team>{
    return this.http.get(this.baseUrl + '/team/' + team._id) as Observable<Team>;
  }
}
