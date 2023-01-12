import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LeagueServiceInterface } from '@domain/league-service-interface';
import { TeamServiceInterface } from '@domain/team-service-interface';

import { DumbLeagueService } from '@test/dumb-league-service';
import { DumbTeamService } from '@test/dumb-team-service';

import { LeagueTeamsComponent } from './league-teams.component';

describe('LeagueTeamsComponent', () => {
  let component: LeagueTeamsComponent;
  let fixture: ComponentFixture<LeagueTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueTeamsComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        {
          provide: LeagueServiceInterface,
          useClass: DumbLeagueService
        },
        {
          provide: TeamServiceInterface,
          useClass: DumbTeamService
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeagueTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
