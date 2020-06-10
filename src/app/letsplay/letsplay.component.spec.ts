import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LetsplayComponent } from './letsplay.component';

describe('LetsplayComponent', () => {
  let component: LetsplayComponent;
  let fixture: ComponentFixture<LetsplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetsplayComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LetsplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

/*   it('should create', () => {
    expect(component).toBeTruthy();
  }); */
});
