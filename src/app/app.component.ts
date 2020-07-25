import { Component } from '@angular/core';
// import * as firebase from 'firebase/app';
// import { firebaseConfig } from 'credentials';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Geolocation } from '@ionic-native/geolocation';
import { SmartAudioService } from './shared/services/smart-audio.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public smartAudioService: SmartAudioService
  ) {
    // firebase.initializeApp(firebaseConfig);
    // firebase.analytics();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.smartAudioService.preload('welcome', './assets/sounds/halloween.mp3');
    });
    this.smartAudioService.play('welcome');
  }
}
