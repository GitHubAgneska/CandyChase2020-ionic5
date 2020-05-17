import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AgeSelectComponent } from './age-select.component';
import { DebugElement } from '@angular/core';

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
  let debug: DebugElement;

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

/*   it('should create', () => {
    expect(component).toBeTruthy();
  }); */

/*   it('should display 3 buttons with ageRange', () => {
    const pageDebug: DebugElement = fixture.debugElement;
    const buttonDebug = pageDebug.query(By.css('button'));
  }); */

/* it('should retrieve ageRange when user clicks button', () => {
} ) */

});
