import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';

import { PopoverComponent } from './popover.component';

describe('PopoverComponent', () => {
  let component: PopoverComponent;
  let fixture: ComponentFixture<PopoverComponent>;
  let controller: PopoverController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverComponent ],
      imports: [IonicModule.forRoot()],
      providers: [ PopoverController]
    }).compileComponents();

    fixture = TestBed.createComponent(PopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('#async presentPopover should display popover', async () => {
    
  });
});
