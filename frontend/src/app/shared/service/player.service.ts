import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BackendService } from '@service/backend.service';

import Player from '@model/Player';
import { PlayerServiceInterface } from '@domain/player-service-interface';
import Team from '@model/Team';

@Injectable()
export class PlayerService extends BackendService implements PlayerServiceInterface {

  fetchByTeam(team: Team): Observable<Player[]>{
    return this.http.get(this.baseUrl + '/player/forTeam/' + team._id) as Observable<Player[]>;
  }
}
