import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TeamService } from './team.service';
import { TeamServiceInterface } from '@domain/team-service-interface';

describe('TeamService', () => {
  let service: TeamServiceInterface;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: TeamServiceInterface,
          useClass: TeamService
        }
      ]
    });
    service = TestBed.inject(TeamServiceInterface);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
