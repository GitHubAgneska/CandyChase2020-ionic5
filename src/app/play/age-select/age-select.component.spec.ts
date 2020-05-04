import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AgeSelectComponent } from './age-select.component';


class RouterMock {

  navigateByUrl(url: string) {
    return url;
  }

  serializeUrl(url: string) {
    return url;
  }
  // Dummy further methods here if required
}
// -----

describe('AgeSelectComponent', () => {
  let component: AgeSelectComponent;
  let fixture: ComponentFixture<AgeSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgeSelectComponent ],
      imports: [IonicModule.forRoot()],
      providers: [{ provide: Router, useClass: RouterMock }]
    }).compileComponents();

    fixture = TestBed.createComponent(AgeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
