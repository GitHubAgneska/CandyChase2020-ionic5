import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { CoordinatesI, LocationI } from 'src/app/shared/models/coordinates.interface';

@Injectable({
  providedIn: 'root'
})
export class GeolocService {

  public location: LocationI;
  public currentLat: number;
  public currentLong: number;

/*   const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  }; */

  constructor(public geolocation: Geolocation) {
    this.location = {lat: 0, lng: 0};
    this.currentLat = 0;
    this.currentLong = 0;
  }

  public getCurrentLocation() {

    Geolocation.getCurrentPosition().then((data) => {
      console.log('My latitude : ', data.coords.latitude);
      console.log('My longitude: ', data.coords.longitude);

      this.currentLat = data.coords.latitude;
      this.currentLong = data.coords.longitude;
      console.log('get loc, current coords = : ' + this.currentLat, this.currentLong);

    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }

}
