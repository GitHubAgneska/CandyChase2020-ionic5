import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpErrorHandler } from './play/services/http-error-handler.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
// import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SharedModule } from './shared/shared.module';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

// Geoloc
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';


//  firebase imports
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { HomeComponent } from './home/home.component';
import { AgeSelectComponent } from './age-select/age-select.component';
import { LetsplayComponent } from './letsplay/letsplay.component';

// environment
import { environment } from '../environments/environment';
import { MessageService } from './play/services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    HomeComponent,
    AgeSelectComponent,
    LetsplayComponent
  ],
  entryComponents: [],
  imports: [
    CoreModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    SharedModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [
    HttpClient,
    HttpErrorHandler,
    MessageService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // Geolocation
    NativeGeocoder


  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
