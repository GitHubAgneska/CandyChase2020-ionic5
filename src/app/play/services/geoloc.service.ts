import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { CoordinatesI } from 'src/app/shared/models/coordinates.interface';

@Injectable({
  providedIn: 'root'
})
export class GeolocService {

  public coords: CoordinatesI;

  constructor(public geolocation: Geolocation) { }

  // access/modify current coords
  public setCoords(coords: any) {
    this.coords = coords;
  }
  public getCoords() {
    return this.coords;
  }

  // get current location
  public getLocation() {

  }

}
