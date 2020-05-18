import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Coordinates } from 'src/app/shared/models/coordinates.model';
import * as L from 'leaflet';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';




@Injectable({
  providedIn: 'root'
})
export class GeolocService {

  public coords: Coordinates;
  public currentLat: number;
  public currentLong: number;
  public accuracy: number;

  // Readable Address
  address: string;

  public userAgeRange: number;
  public map: any;

  // Geocoder configuration
  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };


  constructor(private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder) {
    // this.location = { lat: 0, lng: 0 };
    this.currentLat = 0;
    this.currentLong = 0;

  }

  // access /modify current user's age
  public setAgeRange(age: number) {
    this.userAgeRange = age;
  }
  public getAgeRange() {
    return this.userAgeRange;
  }


  public getCurrentLocation() {

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    this.geolocation.getCurrentPosition(options).then((data) => {
      this.currentLat = data.coords.latitude;
      this.currentLong = data.coords.longitude;
      this.accuracy = data.coords.accuracy;
      this.getGeoencoder(this.currentLat, this.currentLong);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  // geocoder method to fetch address from coordinates passed as arguments
  public getGeoencoder(latitude: number, longitude: number) {
    this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
      .then((result: NativeGeocoderResult[]) => {
        this.address = this.generateAddress(result[0]);
        console.log(this.address);
      })
      .catch((error: any) => {
        alert('Error getting location' + JSON.stringify(error));
      });
  }

  // Return Comma separated address
  public generateAddress(addressObj: any) {
    const obj = [];
    let address = '';
    for (const key in addressObj) {
      if ( addressObj ) {
        obj.push(addressObj[key]);
      }
    }
    obj.reverse();
    for (const val in obj) {
      if (obj[val].length) {
        address += obj[val] + ', ';
      }
    }
    return address.slice(0, -2);
  }


  public loadMap() {
    // initialize Leaflet
    this.map = L.map('map');

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
      tileSize: 512,
      zoomOffset: -1
    }).addTo(this.map);

    this.map.locate({ setView: true, maxZoom: 16 })

      .on('locationfound', (e: { accuracy: any; latlng: L.LatLngLiteral | L.LatLngTuple; }) => {
        const radius = e.accuracy;
        L.marker(e.latlng).addTo(this.map)
          .bindPopup('You are here!').openPopup();
          // .bindPopup('You are within ' + radius + ' meters from this point').openPopup();

       // L.circle(e.latlng, radius).addTo(this.map);
      })
      .on('locationerror', (err: { message: any; }) => {
        alert(err.message);
      });
  }



}
