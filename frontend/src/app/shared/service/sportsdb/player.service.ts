import { Injectable } from '@angular/core';
import { PlayerServiceInterface } from '@domain/player-service-interface';
import Player from '@model/Player';
import Team from '@model/Team';
import { map, Observable } from 'rxjs';
import { SportsdbBackendService } from './sportsdb-backend.service';

@Injectable()
export class PlayerService extends SportsdbBackendService implements PlayerServiceInterface {

  fetchByTeam(team: Team): Observable<Player[]> {
    return this.http.get(this.baseUrl + '/lookup_all_players.php?id=' + team._id)
    .pipe(
      map((data: any) => data.players.map((current: any) => mapToPlayer(current)))
    )
  }
}

function mapToPlayer(player: any): Player{
  return {
    _id: player.idPlayer,
    name: player.strPlayer,
    position: player.strPosition,
    thumbnail: player.strPlayerBadge,
    signin: player.signinPlayer,
    born: player.dateBorn
  }
}