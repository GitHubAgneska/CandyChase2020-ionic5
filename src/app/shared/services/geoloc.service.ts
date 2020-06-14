import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Coordinates } from '../../shared/models/coordinates.model';
import * as L from 'leaflet';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';

@Injectable({
  providedIn: 'root'
})
export class GeolocService {

  public geo: Coordinates;
  public map: any;

  public userAgeRange: number;

  public coords: any = {};
  public currentLat: number;
  public currentLong: number;
  public accuracy: number;

  public allowedDistance: number;
  public mapBounds: number[];



  // geoencoder ------
  public address: string;
  // Geocoder configuration
  public geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };
  // ----------------

  constructor(
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder) {

    this.currentLat = 0;
    this.currentLong = 0;
    this.coords = { lat: 0, long: 0 };
    this.allowedDistance = 0;
    this.mapBounds = [];
  }

  public setGeo(geoloc) {
    this.geo = geoloc;
  }
  public getGeo() {
    return this.geo;
  }

  // access /modify current user's age
  public setAgeRange(age: number) {
    this.userAgeRange = age;
  }
  public getAgeRange() {
    return this.userAgeRange;
  }


  public findAllowedDistance(ageRange: number) {

    this.userAgeRange = ageRange;
    console.log('Age: ', this.userAgeRange);

    if (this.userAgeRange === 1) {
      this.allowedDistance = 300;
    } else {
      if (this.userAgeRange === 2) {
        this.allowedDistance = 500;
      } else { this.allowedDistance = 800; }
    }
    return this.allowedDistance;
  }


  public getCurrentLocation(): any {

    this.geolocation.getCurrentPosition()
    .then((data) => {

      console.log('RAW DATA= ', data);
      this.setGeo(data);
      this.currentLat = data.coords.latitude;
      this.currentLong = data.coords.longitude;
     // this.coords = { lat: data.coords.latitude, long: data.coords.longitude };
      console.log('lat= ', this.currentLat, 'Long= ', this.currentLong);
      this.coords = { lat: this.currentLat, lng: this.currentLong };
      console.log('COORDS===', this.coords);

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }


  // calculate new coords for map age filter, using current coords and distance 'dist'
  // we need 4 points to delimit a perimeter of x meters around current position :
  // current pos(lat + distance , long + distance), pos(lat - distance, long - distance)
  public calculateMapBounds(allowedDistance: number) {

    const earthRadius = 6378;
    this.allowedDistance = allowedDistance;
    console.log('CURRENT: ', this.currentLong, this.currentLat);

    const m = (1 / ((2 * Math.PI / 360) * earthRadius)) / 1000;  // 1 meter in degree

    const newLatitude1 = this.currentLat + (this.allowedDistance * m);
    const newLongitude1 = this.currentLong + (this.allowedDistance * m) / Math.cos(this.currentLat * (Math.PI / 180));
    console.log('new point 1 : ', newLatitude1, newLongitude1);

    const newLatitude2 = this.currentLat - (this.allowedDistance * m);
    const newLongitude2 = this.currentLong - (this.allowedDistance * m) / Math.cos(this.currentLat * (Math.PI / 180));
    console.log('new point 1 : ', newLatitude2, newLongitude2);

    this.mapBounds = [newLatitude1, newLongitude1, newLatitude2, newLongitude2];
    console.log('BOUNDS= ', this.mapBounds);

    return this.mapBounds;
  }


  public loadMapWithBounds() {

    console.log('BOUNDS AT LOAD MAP = ', this.mapBounds);

    const corner1 = L.latLng(this.mapBounds[0], this.mapBounds[1]),
          corner2 = L.latLng(this.mapBounds[2], this.mapBounds[3]),
          bounds  = L.latLngBounds(corner1, corner2);

    // initialize Leaflet
    this.map = L.map('map');

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
      /*    tileSize: 512,
          zoomOffset: 0 */
    }).addTo(this.map);

    this.map.locate({ setView: true, maxZoom: 16 })

      .on('locationfound', (e: { accuracy: any; latlng: L.LatLngLiteral | L.LatLngTuple; }) => {
        /* const radius = e.accuracy; */
        L.marker(e.latlng).addTo(this.map)
          .bindPopup('You are here!').openPopup();
        })
        .on('locationerror', (err: { message: any; }) => {
          alert(err.message);
        });

    this.addBounds(bounds);
  }


  // add bounds around current position on map
  public addBounds(bounds: any) {

    this.geolocation.getCurrentPosition().then((res) => {
      L.rectangle(bounds, { color: '#00000', weight: 1 })
        .addTo(this.map);
      this.map.fitBounds(bounds);
    }).catch((error) => {
      console.log('Error getting bounds', error);
    });
  }



  // ------------------------------
  // for tests - issue map browser
  public loadMapWithoutBounds() {
    // this.coords = this.getCoords();

    this.map = L.map('map');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
      /*       tileSize: 512,
            zoomOffset: 0 */
    }).addTo(this.map);

    this.map.locate({ setView: true, maxZoom: 18 })

      .on('locationfound', (e: { latlng: L.LatLngLiteral | L.LatLngTuple; }) => {

        L.marker(e.latlng).addTo(this.map)
          .bindPopup('You are here!').openPopup();
      })
      .on('locationerror', (err: { message: any; }) => {
        alert(err.message);
      });
  }
  // ------------------------------


}



  // ------ GEOCODER -------
  // geocoder method to fetch address from coordinates passed as arguments
/*   public getGeoencoder(latitude: number, longitude: number) {
    this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
      .then((result: NativeGeocoderResult[]) => {
        console.log(JSON.stringify(result[0]));
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
      if (addressObj) {
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
  } */
  // ---------

