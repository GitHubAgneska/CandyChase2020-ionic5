import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ModalPageComponent } from './elements/modal-page/modal-page.component';

@NgModule({
  declarations: [ ModalPageComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  providers: [
    Geolocation
  ]
})
export class SharedModule { }
