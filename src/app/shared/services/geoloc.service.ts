import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Coordinates } from 'src/app/shared/models/coordinates.model';
import * as L from 'leaflet';


const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};


@Injectable({
  providedIn: 'root'
})
export class GeolocService {

  public coords: Coordinates;
  public currentLat: number;
  public currentLong: number;

  public userAgeRange: number;
  public map: any;


  constructor(private geolocation: Geolocation) {
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

    this.geolocation.getCurrentPosition().then((data) => {
      this.currentLat = data.coords.latitude;
      this.currentLat = data.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });
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
          .bindPopup('You are within ' + radius + ' meters from this point').openPopup();

        L.circle(e.latlng, radius).addTo(this.map);
      })
      .on('locationerror', (err: { message: any; }) => {
        alert(err.message);
      });
  }



}
