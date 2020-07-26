import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { cold, getTestScheduler } from 'jasmine-marbles';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { CandyApiService } from '../services/candy-api.service';
import { KeyvaluePipe } from 'src/app/shared/pipes/keyvalue/keyvalue';
import { ShortenStringPipe } from 'src/app/shared/pipes/shorten-string/shorten-string';
import { RemoveUnderscorePipe } from 'src/app/shared/pipes/remove-underscore/remove-underscore';
import { RemoveCharsPipe } from 'src/app/shared/pipes/remove-chars/remove-chars';
import { CandyDetailsComponent } from './candy-details.component';
import { DebugElement } from '@angular/core';
import { PopoverComponent } from '../../shared/elements/popover/popover.component';
import { PopoverController } from '@ionic/angular';

const candyApiServiceStub = {
  getCandyById(candyItemId: string | number) {
    const candyItem$ = cold('--x|', { x: [{ _id: '1', product_name: 'testName1' }] });
    return candyItem$;
  }
};

describe('CandyDetailsComponent', () => {
  let component: CandyDetailsComponent;
  let fixture: ComponentFixture<CandyDetailsComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandyDetailsComponent,
                      KeyvaluePipe,
                      RemoveUnderscorePipe,
                      RemoveCharsPipe,
                      ShortenStringPipe,
                      PopoverComponent ],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule
      ],
      providers: [
        { provide: CandyApiService, useValue: candyApiServiceStub },
        KeyvaluePipe, RemoveUnderscorePipe, RemoveCharsPipe, ShortenStringPipe, PopoverComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CandyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(ShortenStringPipe.prototype, 'transform').and.returnValue('myValue');
  }));

/*  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display page title', () => {
    const pageDebug: DebugElement = fixture.debugElement;
    const titleDebug = pageDebug.query(By.css('ion-title'));
    const pageTitle: HTMLElement = titleDebug.nativeElement;
    expect(pageTitle.textContent).toEqual('Candy Infos');
  }); */
});
