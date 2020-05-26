import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GeolocService } from '../../shared/services/geoloc.service';


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

  constructor(
    private geolocService: GeolocService

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


  addCircle() {}
  myAddresses() {}

}
