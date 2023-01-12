import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LeagueSearchComponent } from './league-search/league-search.component';

@NgModule({
  declarations: [
    LeagueSearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LeagueSearchComponent
  ]
})
export class LeagueModule { }
