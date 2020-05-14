import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  public map: any;

  constructor(

    ) { }

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    // initialize Leaflet
    this.map = L.map('map').fitWorld();

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',

      maxZoom: 18,
      tileSize: 512,
      zoomOffset: -1
    }).addTo(this.map);

    this.map.locate({
      setView: true,
      maxZoom: 18
    });

  }

  addCircle() {}
  myAddresses() {}

}
