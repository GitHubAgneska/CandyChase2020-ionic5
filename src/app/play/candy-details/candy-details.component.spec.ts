import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { cold, getTestScheduler } from 'jasmine-marbles';
import { By } from '@angular/platform-browser';
import { NavController, NavParams } from '@ionic/angular';
import { CandyApiService } from '../services/candy-api.service';
import { KeyvaluePipe } from 'src/app/shared/pipes/keyvalue/keyvalue';
import { RemoveUnderscorePipe } from 'src/app/shared/pipes/remove-underscore/remove-underscore';
import { RemoveCharsPipe } from 'src/app/shared/pipes/remove-chars/remove-chars';
import { CandyDetailsComponent } from './candy-details.component';

const candyApiServiceStub = {
  getCandyById(candyItemId: string | number) {
    const candyItem$ = cold('--x|', { x: [{ _id: '1', product_name: 'testName1' }] });
    return candyItem$;
  }
};

describe('CandyDetailsComponent', () => {
  let component: CandyDetailsComponent;
  let fixture: ComponentFixture<CandyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandyDetailsComponent,
                      KeyvaluePipe,
                      RemoveUnderscorePipe,
                      RemoveCharsPipe ],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: CandyApiService, useValue: candyApiServiceStub },
        KeyvaluePipe,
        RemoveUnderscorePipe,
        RemoveCharsPipe ]
    }).compileComponents();

    fixture = TestBed.createComponent(CandyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
