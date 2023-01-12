import { Component, Input } from '@angular/core';

import Player from '@model/Player';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent {

  @Input('players') players?: Player[];

}
