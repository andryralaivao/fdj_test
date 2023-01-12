import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeagueServiceInterface } from '@domain/league-service-interface';
import { TeamServiceInterface } from '@domain/team-service-interface';

import League from '@model/League';
import Team from '@model/Team';

@Component({
  selector: 'app-league-teams',
  templateUrl: './league-teams.component.html',
  styleUrls: ['./league-teams.component.css']
})
export class LeagueTeamsComponent {

  public league?: League;
  public teams: Team[] = [];

  constructor(private routes: ActivatedRoute,
    private teamService: TeamServiceInterface,
    private leagueService: LeagueServiceInterface) {

    this.routes.params.subscribe(param => {

      if (param["league_id"]) {
        this.fetchLeagueDetails(param["league_id"]);
        this.fetchLeagueTeams(param["league_id"]);
      }
    })
  }

  private fetchLeagueDetails(leagueId: string) {
    this.leagueService.getDetails({_id: leagueId}).subscribe(
      (league: League) => {
        this.league = league
      },
      error => {
        console.log(error);
      })
  }

  private fetchLeagueTeams(leagueId: string) {
    this.teamService.fetchByLeague({_id: leagueId}).subscribe(
      (teams: Team[]) => {
        this.teams = teams
      },
      error => {
        console.log(error);
      })
  }
}
