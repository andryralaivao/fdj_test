import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LeagueService } from './league.service';
import { LeagueServiceInterface } from '@domain/league-service-interface';

describe('LeagueService', () => {
  let service: LeagueServiceInterface;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: LeagueServiceInterface,
          useClass: LeagueService
        }
      ]
    });
    service = TestBed.inject(LeagueServiceInterface);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
