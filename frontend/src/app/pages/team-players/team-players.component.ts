import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Player from '@model/Player';
import Team from '@model/Team';

import { TeamServiceInterface } from '@domain/team-service-interface';
import { PlayerServiceInterface } from '@domain/player-service-interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-team-players',
  templateUrl: './team-players.component.html',
  styleUrls: ['./team-players.component.css']
})
export class TeamPlayersComponent {

  public team?: Team;
  public players: Player[] = [];

  constructor(private routes: ActivatedRoute,
    private location: Location,
    private teamService: TeamServiceInterface,
    private playerService: PlayerServiceInterface) {

    this.routes.params.subscribe(param => {

      if (param["team_id"]) {
        this.fetchTeamDetails(param["team_id"]);
        this.fetchTeamTeams(param["team_id"]);
      }
    })
  }

  public goBack(){
    this.location.back();
  }

  private fetchTeamDetails(teamId: string) {
    this.teamService.getDetails({_id: teamId}).subscribe(
      (team: Team) => {
        this.team = team
      },
      error => {
        console.log(error);
      })
  }

  private fetchTeamTeams(teamId: string) {
    this.playerService.fetchByTeam({_id: teamId}).subscribe(
      (players: Player[]) => {
        this.players = players
      },
      error => {
        console.log(error);
      })
  }
}
