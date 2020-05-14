import { Component } from '@angular/core';
// import * as firebase from 'firebase/app';
// import { firebaseConfig } from 'credentials';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    // firebase.initializeApp(firebaseConfig);
    // firebase.analytics();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      Geolocation.getCurrentPosition().then((data) => {
        console.log('My latitude : ', data.coords.latitude);
        console.log('My longitude: ', data.coords.longitude);
      },
        err => {
          alert('Error message : ' + err.message);
        });
    });
  }
}
