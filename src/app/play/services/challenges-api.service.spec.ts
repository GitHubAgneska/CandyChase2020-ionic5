import { TestBed } from '@angular/core/testing';

import { ChallengesApiService } from './challenges-api.service';

describe('ChallengesApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChallengesApiService = TestBed.get(ChallengesApiService);
    expect(service).toBeTruthy();
  });
});
