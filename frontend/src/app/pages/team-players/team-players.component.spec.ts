import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PlayerServiceInterface } from '@domain/player-service-interface';
import { TeamServiceInterface } from '@domain/team-service-interface';
import { DumbPlayerService } from '@test/dumb-player-service';
import { DumbTeamService } from '@test/dumb-team-service';

import { TeamPlayersComponent } from './team-players.component';

describe('TeamPlayersComponent', () => {
  let component: TeamPlayersComponent;
  let fixture: ComponentFixture<TeamPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamPlayersComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        {
          provide: TeamServiceInterface,
          useClass: DumbTeamService
        },
        {
          provide: PlayerServiceInterface,
          useClass: DumbPlayerService
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
