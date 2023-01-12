import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PlayerService } from './player.service';
import { PlayerServiceInterface } from '@domain/player-service-interface';

describe('PlayerService', () => {
  let service: PlayerServiceInterface;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: PlayerServiceInterface,
          useClass: PlayerService
        }
      ]
    });
    service = TestBed.inject(PlayerServiceInterface);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
