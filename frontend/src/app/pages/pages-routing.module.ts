import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { LeagueTeamsComponent } from './league-teams/league-teams.component';
import { TeamPlayersComponent } from './team-players/team-players.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'league/:league_id',
    component: LeagueTeamsComponent
  },
  {
    path: 'team/:team_id',
    component: TeamPlayersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
