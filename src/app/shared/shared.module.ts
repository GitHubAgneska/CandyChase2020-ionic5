import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule
  ],
  providers: [
    Geolocation
  ]
})
export class SharedModule { }
