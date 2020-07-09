import { TestBed } from '@angular/core/testing';

import { UserStatsService } from './user-stats.service';

describe('UserStatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  /* it('should be created', () => {
    const service: UserStatsService = TestBed.get(UserStatsService);
    expect(service).toBeTruthy();
  }); */


  // testing behavior sub example
/*   const subjectMock = new BehaviorSubject<moment.Moment>(undefined),
  const mockDatePickerService = { selectedDate: subjectMock.asObservable() };

  Now, you provide it as you did, and in your tests, you can simply do this (this is an example, not a test you must do) :

  it('changeDate should call subject.next', () => {
    const value = 'Moment value here';
    subjectMock
      .pipe(filter(res => !!res))
      .subscribe(res => expect(res).toEqual(value));

    subjectMock.next(value);
  }); */
});
