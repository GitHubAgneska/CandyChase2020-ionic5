import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Injectable({
  providedIn: 'root'
})
export class SmartAudioService {

  audioType = 'html5';
  sounds: any = [];

  constructor(
    public nativeAudio: NativeAudio,
    platform: Platform
    ) {
    if (platform.is('cordova')) {
      this.audioType = 'native';
    }
  }


  preload(key: string, asset: string) {
    if (this.audioType === 'html5') {
      const audio = {
        key: '',
        asset: '',
        type: 'html5'
      };
      this.sounds.push(audio);

    } else {
      this.nativeAudio.preloadSimple(key, asset);

      const audio = {
        key: '',
        asset: key,
        type: 'native'
      };
      this.sounds.push(audio);
    }
  }


  play(key: string) {
    const audio = this.sounds.find((sound) => {
      return sound.key === key;
    });

    if (audio.type === 'html5') {
      const audioAsset = new Audio(audio.asset);
      audioAsset.play();

    } else {

      this.nativeAudio.play(audio.asset).then((res) => {
        console.log(res);
      }, (err) => {
        console.log(err);
      });
    }
  }

}
