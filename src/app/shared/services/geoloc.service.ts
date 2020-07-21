import { Component, NgZone } from '@angular/core';
import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Coordinates } from '../../shared/models/coordinates.model';
import * as L from 'leaflet';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { Platform } from '@ionic/angular';
declare var google;

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
  public userCity: string;
  public lat;
  public lng;
  public latLngResult;
  public userLocationFromLatLng;

  // Geocoder configuration
  public geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };
  // ----------------

  constructor(
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private platform: Platform,
    public zone: NgZone
    ) {
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
    // console.log('Age: ', this.userAgeRange);

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

        // console.log('RAW DATA= ', data);
        this.setGeo(data);
        this.currentLat = data.coords.latitude;
        this.currentLong = data.coords.longitude;
        // console.log('lat= ', this.currentLat, 'Long= ', this.currentLong);
        this.coords = { lat: this.currentLat, lng: this.currentLong };
        console.log('COORDS===', this.coords);

        this.calculateMapBounds(this.allowedDistance);

      }).catch((error) => {
        console.log('Error getting location', error);
      });
  }

  public trackPosition() {
    this.geolocation.watchPosition();
  }


  // calculate new coords for map age filter, using current coords and distance 'dist'
  // we need 4 points to delimit a perimeter of x meters around current position :
  // current pos(lat + distance , long + distance), pos(lat - distance, long - distance)
  public calculateMapBounds(allowedDistance: number) {

    const earthRadius = 6378;
    this.allowedDistance = allowedDistance;

    const m = (1 / ((2 * Math.PI / 360) * earthRadius)) / 1000;  // 1 meter in degree

    const newLatitude1 = this.currentLat + (this.allowedDistance * m);
    const newLongitude1 = this.currentLong + (this.allowedDistance * m) / Math.cos(this.currentLat * (Math.PI / 180));
    // console.log('new point 1 : ', newLatitude1, newLongitude1);

    const newLatitude2 = this.currentLat - (this.allowedDistance * m);
    const newLongitude2 = this.currentLong - (this.allowedDistance * m) / Math.cos(this.currentLat * (Math.PI / 180));
    // console.log('new point 2 : ', newLatitude2, newLongitude2);

    this.mapBounds = [newLatitude1, newLongitude1, newLatitude2, newLongitude2];
    console.log('BOUNDS= ', this.mapBounds);

    return this.mapBounds;
  }


  public loadMapWithBounds() {

    // console.log('BOUNDS AT LOAD MAP = ', this.mapBounds);
    const corner1 = L.latLng(this.mapBounds[0], this.mapBounds[1]),
      corner2 = L.latLng(this.mapBounds[2], this.mapBounds[3]),
      bounds = L.latLngBounds(corner1, corner2);

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

        // add bounds around current position on map
        L.rectangle(bounds, { color: '#FFB22D', weight: 5 }).addTo(this.map)
          .bindPopup('This is your perimeter!');
        this.map.fitBounds(bounds);
      })
      .on('locationerror', (err: { message: any; }) => {
        alert(err.message);
      });
  }

  // for test purposes ................
  public loadMapWithoutBounds() {
    this.getCurrentLocation();
    this.map = L.map('map');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
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
  } // ..................................



  // ------ GEOCODER -------
  /* reverseGeocode(lat: number, lng: number) {

    if (this.platform.is('cordova')) {
      const options: NativeGeocoderOptions = {
          useLocale: true,
          maxResults: 5
        };

      this.nativeGeocoder.reverseGeocode(lat, lng, this.geoencoderOptions)
      .then((result: NativeGeocoderResult[]) => {
        console.log(JSON.stringify(result[0]));
        this.address = this.generateAddress(result[0]);
        console.log('ADDRESS==', this.address);
      })
      .catch((error: any) => {
        alert('Error getting location' + JSON.stringify(error));
      });
    } else {
      this.getGeoLocation(lat, lng, 'reverseGeocode');
      }
    }

    async getGeoLocation(lat: number, lng: number, type?) {
      if (navigator.geolocation) {
        const geocoder = await new google.maps.Geocoder();
        const latlng = await new google.maps.LatLng(lat, lng);
        const request = { latLng: latlng };

        await geocoder.geocode(request, (results, status) => {
          if (status === google.maps.GeocoderStatus.OK) {
            const result = results[0];
            this.zone.run(() => {
              if (result != null) {
                this.userCity = result.formatted_address;
                if (type === 'reverseGeocode') {
                  this.latLngResult = result.formatted_address;
                }
              }
            });
          }
        });
      }
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
  }
  // ---------

  forwardGeocode(address) {
    if (this.platform.is('cordova')) {
      const options: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
      };
      this.nativeGeocoder.forwardGeocode(address, options)
        .then((result: NativeGeocoderResult[]) => {
          this.zone.run(() => {
            this.lat = result[0].latitude;
            this.lng = result[0].longitude;
          });
        })
        .catch((error: any) => console.log(error));
    } else {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address }, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
          this.zone.run(() => {
            this.lat = results[0].geometry.location.lat();
            this.lng = results[0].geometry.location.lng();
          });
        } else {
          alert('Error - ' + results + ' & Status - ' + status)
        }
      });
    }
  } */
  
}

