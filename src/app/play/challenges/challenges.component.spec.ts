import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ChallengesComponent } from './challenges.component';

class RouterMock {

  navigateByUrl(url: string) {
    return url;
  }

  serializeUrl(url: string) {
    return url;
  }
  // Dummy further methods here if required
}

describe('ChallengesComponent', () => {
  let component: ChallengesComponent;
  let fixture: ComponentFixture<ChallengesComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengesComponent ],
      imports: [IonicModule.forRoot()],
      providers: [{ provide: Router, useClass: RouterMock }]
    }).compileComponents();

    fixture = TestBed.createComponent(ChallengesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

/*  it('should create', () => {
    expect(component).toBeTruthy();
  }); */
});
