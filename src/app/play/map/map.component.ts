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

  constructor(
    private geolocService: GeolocService

    ) { }

  ngOnInit() {
    this.age = this.geolocService.getAgeRange();
    console.log(this.age);
    this.geolocService.getCurrentLocation();
    this.geolocService.loadMap();
  }


  addCircle() {}
  myAddresses() {}

}
