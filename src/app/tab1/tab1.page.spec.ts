import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
// import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { cold, getTestScheduler } from 'jasmine-marbles';
import { Tab1Page } from './tab1.page';
import { CandyApiService } from '../services/candy-api.service';
import { DebugElement } from '@angular/core';


const candyApiServiceStub = {
  getAllCandyFromApi() {
    const candyList$ = cold('--x|', { x: [{ _id: '1', product_name: 'testName1' }] });
    return candyList$;
  }
};

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Tab1Page],
      imports: [IonicModule.forRoot(), 
        // ExploreContainerComponentModule
      ],
      providers: [ { provide: CandyApiService, useValue: candyApiServiceStub } ]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    // element = debug.nativeElement;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#component should call observable via service and return an array candyList', () => {
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
  });
});
