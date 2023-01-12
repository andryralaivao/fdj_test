import { Injectable } from '@angular/core';
import { TeamServiceInterface } from '@domain/team-service-interface';
import League from '@model/League';
import Team from '@model/Team';
import { map, Observable } from 'rxjs';
import { SportsdbBackendService } from './sportsdb-backend.service';

@Injectable()
export class TeamService extends SportsdbBackendService implements TeamServiceInterface {

  fetchByLeague(league: League): Observable<Team[]> {
    return this.http.get(this.baseUrl + '/search_all_teams.php?l=' + league._id)
    .pipe(
      map((data: any) => data.teams.map((current: any) => mapToTeam(current)))
    );
  }

  getDetails(team: Team): Observable<Team> {
    return this.http.get(this.baseUrl + '/lookupteam.php?id=' + team._id)
    .pipe(
      map((data: any) => data.teams.map((current: any) => mapToTeam(current)))
    );
  }
}

function mapToTeam(team: any): Team{
  return {
    _id: team.idTeam,
    name: team.strTeam,
    thumbnail: team.strTeamBadge
  }
}