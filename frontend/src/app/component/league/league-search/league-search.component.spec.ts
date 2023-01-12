import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeagueServiceInterface } from '@domain/league-service-interface';

import { DumbLeagueService } from '@test/dumb-league-service';

import { LeagueSearchComponent } from './league-search.component';

describe('LeagueSearchComponent', () => {
  let component: LeagueSearchComponent;
  let fixture: ComponentFixture<LeagueSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueSearchComponent],
      providers: [
        {
          provide: LeagueServiceInterface,
          useClass: DumbLeagueService
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LeagueSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
