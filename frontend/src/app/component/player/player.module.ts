import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from 'src/app/shared/pipe/currency.pipe';

import { PlayersListComponent } from './players-list/players-list.component';

@NgModule({
  declarations: [
    PlayersListComponent,
    CurrencyPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlayersListComponent
  ]
})
export class PlayerModule { }
