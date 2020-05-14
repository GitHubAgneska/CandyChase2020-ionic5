import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    IonicModule
  ],
  providers: [
  ],
  exports: [
    LoginComponent

  ]
})
export class CoreModule { }
