import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, PopoverController } from '@ionic/angular';
// Geoloc
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

// ELEMENTS
import { ModalPageComponent } from './elements/modal-page/modal-page.component';
import { LoadingAnimationComponent } from './loading-animation/loading-animation.component';
import { PopoverComponent } from './elements/popover/popover.component';

@NgModule({
  declarations: [ ModalPageComponent, LoadingAnimationComponent, PopoverComponent ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  providers: [
    Geolocation,
    NativeGeocoder,
    PopoverController,
    PopoverComponent
  ],
  exports : [ LoadingAnimationComponent, PopoverComponent],
  entryComponents: [ PopoverComponent]

})
export class SharedModule { }
