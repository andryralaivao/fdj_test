import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import { HomePageComponent } from './home-page/home-page.component';
import { LeagueTeamsComponent } from './league-teams/league-teams.component';
import { TeamPlayersComponent } from './team-players/team-players.component';

import { LeagueModule } from '../component/league/league.module';
import { TeamModule } from '../component/team/team.module';
import { PlayerModule } from '../component/player/player.module';

import { LeagueServiceInterface } from '@domain/league-service-interface';
// import { LeagueService } from '@service/sportsdb/league.service';
import { LeagueService } from '@service/league.service';

import { TeamServiceInterface } from '@domain/team-service-interface';
// import { TeamService } from '@service/sportsdb/team.service';
import { TeamService } from '@service/team.service';

import { PlayerServiceInterface } from '@domain/player-service-interface';
// import { PlayerService } from '@service/sportsdb/player.service';
import { PlayerService } from '@service/player.service';

@NgModule({
  declarations: [
    HomePageComponent,
    LeagueTeamsComponent,
    TeamPlayersComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LeagueModule,
    TeamModule,
    PlayerModule,
  ],
  providers: [
    {
      provide: LeagueServiceInterface,
      useClass: LeagueService
    },
    {
      provide: TeamServiceInterface,
      useClass: TeamService
    },
    {
      provide: PlayerServiceInterface,
      useClass: PlayerService
    }
  ]
})

export class PagesModule { }
