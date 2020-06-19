import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ModalPageComponent } from './elements/modal-page/modal-page.component';
import { LoadingAnimationComponent } from './loading-animation/loading-animation.component';

@NgModule({
  declarations: [ ModalPageComponent, LoadingAnimationComponent ],
  imports: [
    CommonModule,
    IonicModule
  ],
  providers: [
    Geolocation
  ],
  exports : [ LoadingAnimationComponent]
})
export class SharedModule { }
