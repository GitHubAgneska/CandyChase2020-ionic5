import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { cold, getTestScheduler } from 'jasmine-marbles';
import { By } from '@angular/platform-browser';
import { CandyApiService } from '../services/candy-api.service';
import { CandyListComponent } from './candy-list.component';
import { ShortenStringPipe } from 'src/app/shared/pipes/shorten-string/shorten-string';
import { DebugElement } from '@angular/core';

const candyApiServiceStub = {
  getAllCandyFromApi() {
    const candyList$ = cold('--x|', { x: [{ _id: '1', product_name: 'testName1' }] });
    return candyList$;
  }
};
describe('CandyListComponent', () => {
  let component: CandyListComponent;
  let fixture: ComponentFixture<CandyListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandyListComponent, ShortenStringPipe ],
      imports: [IonicModule.forRoot()],
      providers: [ { provide: CandyApiService, useValue: candyApiServiceStub }, ShortenStringPipe ]
    }).compileComponents();

    fixture = TestBed.createComponent(CandyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(ShortenStringPipe.prototype, 'transform').and.returnValue('myValue');

  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find the <ion-title> with fixture.debugElement.query(By.css)', () => {
    const pageDebug: DebugElement = fixture.debugElement;
    const titleDebug = pageDebug.query(By.css('ion-title'));
    const pageTitle: HTMLElement = titleDebug.nativeElement;
    expect(pageTitle.textContent).toEqual('Candy to find');
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

  /* TODO  : add dom test for pipe */

});
