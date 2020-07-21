import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GeolocService } from '../../shared/services/geoloc.service';
import { ToastController } from '@ionic/angular';
import { Coordinates } from '../../shared/models/coordinates.model';
import { UserStatsService } from '../../shared/services/user-stats.service';
import { AddressI } from '../../shared/models/address.interface';
import { Geolocation } from '@ionic-native/geolocation/ngx';

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
    private geolocation: Geolocation,
    public toastController: ToastController,
    private userStatsService: UserStatsService

  ) {
    // this.newAddress = { lat:  this.coords.latitude, long: this.coords.longitude };
    // this.geolocService.getCurrentLocation();
    this.coords =  this.geolocService.getGeo();
    this.userStatsService.getCurrentAddressesList().subscribe(data => this.addressList = data);
    this.age = this.geolocService.getAgeRange();
    // console.log('user age= ', this.age);
    if (this.age === undefined ) { this.age = 3; }

    this.allowedDistance = this.geolocService.findAllowedDistance(this.age);
    // console.log('dist= ', this.allowedDistance);
  }

  ngOnInit() {
    if (!this.coords ) {
      this.geolocService.getCurrentLocation();
      this.geolocService.loadMapWithoutBounds();
    } else {
      this.initMapWithParams();
    }
  }

  ionViewDidLoad() {
  }

  public initMapWithParams() {
    this.mapBounds = this.geolocService.calculateMapBounds(this.allowedDistance);
    console.log('mapBounds= ', this.mapBounds);

    this.geolocService.loadMapWithBounds();
    // this.geolocService.loadMapWithoutBounds();
  }


  saveAddress() {
    console.log('COORDS==', this.coords);

    if (!this.coords) {
      this.geolocation.getCurrentPosition().then((data) => {
        this.coords.lat = data.coords.latitude;
        this.coords.long = data.coords.longitude;
        console.log('COORDS==', this.coords);
      });
    }

    this.newAddress = { lat: this.coords.coords.latitude, long: this.coords.coords.longitude };
    console.log('NEW ADDRESS==', this.newAddress);
    console.log('ADDRESSLIST=', this.addressList, 'LENGHT=', this.addressList.length);

    if ( this.addressList.length > 0) {
      // tslint:disable-next-line: prefer-for-of
      this.addressList.forEach( (element: Partial<AddressI>) => {
        console.log('ELEMENT==', element);
        if ( element.lat === this.newAddress.lat && element.long === this.newAddress.long) {
          this.presentToastWithOptions('Address already saved!');
          return;
        } else {
          this.newAddress.timestamp = Date.now();
          this.addressList.push(this.newAddress);
          this.userStatsService.updateCurrentAddressesList(this.addressList);
          this.presentToastWithOptions('Address saved to favorites ');
        }
      });
    } else {
      this.newAddress.timestamp = Date.now();
      this.addressList.push(this.newAddress);
      this.userStatsService.updateCurrentAddressesList(this.addressList);
      this.presentToastWithOptions('Address saved to favorites ');
    }
  }


  async presentToastWithOptions(message: string) {
    const toast = await this.toastController.create({
      message: `${ message }`,
      position: 'middle',
      duration: 500,
      cssClass: 'savedAddress-toast'
    });
    toast.present();
  }

}

