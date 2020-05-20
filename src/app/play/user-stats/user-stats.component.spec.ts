import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserStatsComponent } from './user-stats.component';

describe('UserStatsComponent', () => {
  let component: UserStatsComponent;
  let fixture: ComponentFixture<UserStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStatsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

/*   it('should create', () => {
    expect(component).toBeTruthy();
  }); */
});
