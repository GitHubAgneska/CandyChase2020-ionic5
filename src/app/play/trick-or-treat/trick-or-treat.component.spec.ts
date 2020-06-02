import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TrickOrTreatComponent } from './trick-or-treat.component';

class RouterMock {

  navigateByUrl(url: string) {
    return url;
  }

  serializeUrl(url: string) {
    return url;
  }
  // Dummy further methods here if required
}


describe('TrickOrTreatComponent', () => {
  let component: TrickOrTreatComponent;
  let fixture: ComponentFixture<TrickOrTreatComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrickOrTreatComponent ],
      imports: [IonicModule.forRoot()],
      providers: [{ provide: Router, useClass: RouterMock }]
    }).compileComponents();

    fixture = TestBed.createComponent(TrickOrTreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
/* 
  it('should create', () => {
    expect(component).toBeTruthy();
  }); */
});
