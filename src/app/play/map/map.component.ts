import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GeolocService } from '../../shared/services/geoloc.service';
import { ToastController } from '@ionic/angular';
import { Coords } from 'leaflet';
import { UserStatsService } from '../../shared/services/user-stats.service';

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

  public newAddress: Coords;

  public heartIcon = 'assets/graphicMat/heartAsset_red.png';

  constructor(
    private geolocService: GeolocService,
    public toastController: ToastController,
    private userStatsService: UserStatsService

    ) { }

  ngOnInit() {
    // this.geolocService.getCurrentLocation();
    this.initMapWithParams();
  }

  public initMapWithParams() {

    // this.geolocService.getCurrentLocation();

    this.age = this.geolocService.getAgeRange();
    console.log('user age= ', this.age);

    this.allowedDistance = this.geolocService.findAllowedDistance(this.age);
    console.log('dist= ', this.allowedDistance);

    this.mapBounds = this.geolocService.calculateMapBounds(this.allowedDistance);
    console.log('mapBounds= ', this.mapBounds);

    this.geolocService.loadMapWithBounds();
  }

  saveAddress() {

    this.newAddress = this.geolocService.getCoords();
    this.userStatsService.updateCurrentAddressesList(this.newAddress);

  }


  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      message: `Address saved to favorites !`,
      position: 'middle',
      duration: 500,
      cssClass: 'custom-toast'
    });
    toast.present();

  }
}
