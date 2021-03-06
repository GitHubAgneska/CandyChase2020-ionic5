import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { cold, getTestScheduler } from 'jasmine-marbles';
import { By } from '@angular/platform-browser';
import { CandyApiService } from '../services/candy-api.service';
import { UserStatsService } from '../../shared/services/user-stats.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CandyListComponent } from './candy-list.component';
import { ShortenStringPipe } from '../../shared/pipes/shorten-string/shorten-string';
import { DebugElement } from '@angular/core';
import { CandyI, CandyChecklistI } from '../../shared/models/candy.interface';

const candyApiServiceStub = {
  getAllCandyFromApi() {
    const candyList$ = cold('--x|', { x: [{ _id: '1', product_name: 'testName1' }] });
    return candyList$;
  }
};

const userStatsServiceStub = {
  addCandyToBackpack(candyItem: CandyI) {
    // TO DO
  }
};

describe('CandyListComponent', () => {
  let component: CandyListComponent;
  let fixture: ComponentFixture<CandyListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandyListComponent, ShortenStringPipe ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [
        { provide: CandyApiService, useValue: candyApiServiceStub },
        { provide: UserStatsService, useValue: userStatsServiceStub },
        ShortenStringPipe ]
    }).compileComponents();

    fixture = TestBed.createComponent(CandyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(ShortenStringPipe.prototype, 'transform').and.returnValue('myValue');

  }));

/*   it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', () => {
    const pageDebug: DebugElement = fixture.debugElement;
    const titleDebug = pageDebug.query(By.css('ion-title'));
    const pageTitle: HTMLElement = titleDebug.nativeElement;
    expect(pageTitle.textContent).toEqual('Candy to find');
  }); */

  /* it('should (call observable via service and) display a list of candy items', () => {
    const pageElement: HTMLElement = fixture.nativeElement;
    expect(pageElement.textContent).toContain('loading...');
    const candyList = pageElement.querySelectorAll('.candyList');
    const loading = pageElement.querySelector('.loading');
    expect(loading).not.toBeNull();
    expect(candyList).not.toBeNull();
    getTestScheduler().flush(); // flush observables
    fixture.detectChanges();
    expect(pageElement.querySelectorAll('.candyList').length).toEqual(1);
    expect(pageElement.querySelectorAll('.loading').length).toEqual(0);
  }); */

  /* TODO  : add dom test for pipe */


// testing behavior subjects :
// https://github.com/ReactiveX/rxjs/blob/master/spec/subjects/BehaviorSubject-spec.ts

  /* it('should update backpack (behavior subject)', async(() => {
          let service: BackpackService;
          service = TestBed.get(BackpackService);
          let itemsInBackpack: CandyI[];
          let itemToAddToBackpack: CandyI;

          const testBackpack: CandyI[] = [
              { _id: 1, product_name: 'A' },
              { _id: 2, product_name: 'B' }
          ];
          service.update_backpack(itemToAddToBackpack);
          service.users.subscribe(users => {
              expect(users).toBe(testUser);
          });
      })); */


});
