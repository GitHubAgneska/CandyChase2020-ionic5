import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { cold, getTestScheduler } from 'jasmine-marbles';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AgeSelectComponent } from './age-select.component';
import { DebugElement } from '@angular/core';
import { GeolocService } from '../shared/services/geoloc.service';
import { GeolocServiceStub } from '../../testing/testing-stubs';
import { UserStatsServiceStub, ChallengesApiServiceStub, RouterMock } from '../../testing/testing-stubs';


describe('AgeSelectComponent', () => {
  let component: AgeSelectComponent;
  let fixture: ComponentFixture<AgeSelectComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgeSelectComponent ],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: Router, useClass: RouterMock },
        { provide: GeolocService, useValue: GeolocServiceStub},
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AgeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display 3 buttons with ageRange', () => {
    const pageDebug: DebugElement = fixture.debugElement;
    const buttonDebug = pageDebug.query(By.css('button'));
    const buttonText: HTMLElement = buttonDebug.nativeElement;
    fixture.detectChanges();
    expect(buttonText.textContent).toContain(' - ');
  });

  /* it('button #click should retrieve "1, 2 or 3"', () => {
    fixture.detectChanges();
    const age = 3;
    // const selectAgeSpy = spyOn(component.selectAge, );
    let btn: any = fixture.componentInstance.buttons;
    btn = fixture.debugElement.query(By.css('button'));
    btn.nativeElement.click();
    fixture.detectChanges();
    spyOn(component, 'selectAge').and.returnValue();
    fixture.detectChanges();
    expect(component.selectAge(3)).toHaveBeenCalled();
    expect(
      fixture.debugElement.query(By.css('button')).nativeElement.click()
    ).toHaveBeenCalled();
  }); */

});
