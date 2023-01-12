import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { TeamsListComponent } from './teams-list/teams-list.component';

@NgModule({
  declarations: [
    TeamsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TeamsListComponent
  ]
})
export class TeamModule { }
