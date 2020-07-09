import { async, ComponentFixture, TestBed, flush } from '@angular/core/testing';
import { fakeAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { cold, getTestScheduler } from 'jasmine-marbles';
import { Router, ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ChallengesComponent } from './challenges.component';
import { TrickAndTreatI, TrickI, TreatI } from '../../shared/models/challenges.interface';
import { UserStatsService } from '../../shared/services/user-stats.service';
import { ChallengesApiService } from '../services/challenges-api.service';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject, of } from 'rxjs';
import { UserStatsServiceStub,
          ChallengesApiServiceStub,
          RouterMock,
          // ActivatedRouteMock
        } from '../../../testing/testing-stubs';


describe('ChallengesComponent', () => {
  let component: ChallengesComponent;
  let fixture: ComponentFixture<ChallengesComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChallengesComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: Router, useClass: RouterMock },
        { provide: ChallengesApiService, useClass: ChallengesApiServiceStub },
        { provide: UserStatsService, useClass: UserStatsServiceStub },
        // { provide: ActivatedRoute, userClass: ActivatedRouteMock }
        { provide: ActivatedRoute, useValue: { param: of({ choice: 'treat' }) } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ChallengesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

/*
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#ngOnInit should use userstats service to subscribe to all behavior subjects', (() => {
    component.ngOnInit();
    const service = new UserStatsServiceStub();
    service.getCurrentTriggeredTreats().subscribe(data => {
      fixture.detectChanges();
      const mockResponse = data;
      expect(mockResponse).toEqual([1, 2, 3]);
    });
    service.getCurrentTriggeredTricks().subscribe(data => {
      fixture.detectChanges();
      const mockResponse = data;
      expect(mockResponse).toEqual([4, 5, 6]);
    });
    service.getCurrentAchievedTreats().subscribe(data => {
      fixture.detectChanges();
      const mockResponse = data;
      expect(mockResponse).toEqual([7, 8, 9]);
    });
    service.getCurrentAchievedTricks().subscribe(data => {
      fixture.detectChanges();
      const mockResponse = data;
      expect(mockResponse).toEqual([10, 11, 12]);
    });

  }));
  it('#getChoice should retrieve choice param from url', fakeAsync(() => {
    component.ngOnInit();
    const activatedRoute = TestBed.get(ActivatedRoute);
    fixture.detectChanges();
    const activatedRouteSpy = spyOn(activatedRoute.param, 'subscribe');
    expect(activatedRouteSpy).toHaveBeenCalled();
    expect(activatedRouteSpy).toEqual('treat');
  }));

  it('#getRandomChallenge should return random challenge from array', () => {
    const mockChallengesList = [ { id: 1 }, { id: 2 }, { id: 3}];
  });

  it('#isDone should ', () => {
  });
 */

});
