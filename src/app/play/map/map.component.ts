import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GeolocService } from '../../shared/services/geoloc.service';
import { ToastController } from '@ionic/angular';
import { Coordinates } from '../../shared/models/coordinates.model';
import { UserStatsService } from '../../shared/services/user-stats.service';
import { AddressI } from '../../shared/models/address.interface';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @ViewChild('map', { static: false }) mapContainer: ElementRef;

  public map: any;

  public age: number;
  public allowedDistance: number;
  public mapBounds: number[];
  public coords: any = {};

  public newAddress: any = {};
  public addressList: AddressI[];

  public heartIcon = 'assets/graphicMat/heartAsset_red.png';

  constructor(
    private geolocService: GeolocService,
    public toastController: ToastController,
    private userStatsService: UserStatsService

    ) {
      this.coords =  this.geolocService.getGeo();
      this.addressList = [];
      this.newAddress = { lat:  this.coords.latitude, long: this.coords.longitude };
    }

  ngOnInit() {

    this.initMapWithParams();
  }

  public initMapWithParams() {

    this.age = this.geolocService.getAgeRange();
    console.log('user age= ', this.age);

    this.allowedDistance = this.geolocService.findAllowedDistance(this.age);
    console.log('dist= ', this.allowedDistance);

    this.mapBounds = this.geolocService.calculateMapBounds(this.allowedDistance);
    console.log('mapBounds= ', this.mapBounds);

    this.geolocService.loadMapWithBounds();
  }


  saveAddress() {
    console.log('COORDS==', this.coords);
    // raw object coords =
    // GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1592131995493}
    // coords: GeolocationCoordinates {latitude: 43.6404224, longitude: 7.0418432, altitude:  …}
    // timestamp: 1592131995493__proto__: GeolocationPosition
    this.newAddress = { lat: this.coords.coords.latitude, long: this.coords.coords.longitude };
    console.log('NEW ADDRESS==', this.newAddress);
    this.addressList.push(this.newAddress);
    this.userStatsService.updateCurrentAddressesList(this.addressList);
    this.presentToastWithOptions();
  }


  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      message: `Address saved to favorites !`,
      position: 'middle',
      duration: 500,
      cssClass: 'savedAddress-toast'
    });
    toast.present();
  }

}

