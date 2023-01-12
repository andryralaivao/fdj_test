import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SportsdbBackendService } from './sportsdb-backend.service';

describe('SportsdbBackendService', () => {
  let service: SportsdbBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(SportsdbBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
