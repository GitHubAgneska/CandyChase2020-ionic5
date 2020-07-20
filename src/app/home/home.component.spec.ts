import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Router, ActivatedRoute, convertToParamMap } from '@angular/router';

import { HomeComponent } from './home.component';
import { GeolocService } from '../shared/services/geoloc.service';
import { GeolocServiceStub } from '../../testing/testing-stubs';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpErrorHandler } from '../play/services/http-error-handler.service';
import { MessageService } from '../play/services/message.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';


class RouterMock {
  navigateByUrl(url: string) {
    return url;
  }
  serializeUrl(url: string) {
    return url;
  }
}


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [
        HttpErrorHandler, MessageService,
        { provide: Router, useClass: RouterMock },
        { provide: GeolocService, useValue: GeolocServiceStub},
        { provide: ActivatedRoute, useValue: { param: of(convertToParamMap({ isPlaying: 'true' })) } }]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

/*   it('should create', () => {
    expect(component).toBeTruthy();
  }); */
});
