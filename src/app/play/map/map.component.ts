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
  public addressList: Partial<AddressI[]>;

  public heartIcon = 'assets/graphicMat/heartAsset_red.png';

  constructor(
    private geolocService: GeolocService,
    public toastController: ToastController,
    private userStatsService: UserStatsService

  ) {
    // this.newAddress = { lat:  this.coords.latitude, long: this.coords.longitude };
    // this.geolocService.getCurrentLocation();
    this.userStatsService.getCurrentAddressesList().subscribe(data => this.addressList = data);
    this.age = this.geolocService.getAgeRange();
    console.log('user age= ', this.age);
    if (this.age === undefined ) { this.age = 3; }

    this.allowedDistance = this.geolocService.findAllowedDistance(this.age);
    console.log('dist= ', this.allowedDistance);
  }

  ngOnInit() {

    this.initMapWithParams();
  }

  public initMapWithParams() {

    this.mapBounds = this.geolocService.calculateMapBounds(this.allowedDistance);
    console.log('mapBounds= ', this.mapBounds);

    this.geolocService.loadMapWithBounds();

    // this.geolocService.loadMapWithoutBounds();
  }


  saveAddress() {
    this.geolocService.getCurrentLocation();
    console.log('COORDS==', this.coords);

    this.newAddress = { lat: this.coords.coords.latitude, long: this.coords.coords.longitude };
    console.log('NEW ADDRESS==', this.newAddress);

    // this.userStatsService.getCurrentAddressesList().subscribe(data => this.addressList = data);
    console.log('ADDRESSLIST=', this.addressList, 'LENGHT=', this.addressList.length);

    if ( this.addressList.length) {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.addressList.length ; i++) {
        if (this.addressList[i].coords.lat === this.newAddress.lat && this.addressList[i].coords.long === this.newAddress.long) {
          alert('already saved!');
          return;
        }
      }
    } else {
      this.addressList.push(this.newAddress);
      this.userStatsService.updateCurrentAddressesList(this.addressList);
      this.presentToastWithOptions();
    }

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

