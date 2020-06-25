import { TestBed } from '@angular/core/testing';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { GeolocService } from './geoloc.service';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

describe('GeolocService', () => {

  let geolocation: Geolocation;
  let nativeGeocoder: NativeGeocoder;

  beforeEach( async ()  => {

    TestBed.configureTestingModule({
      providers: [ Geolocation, NativeGeocoder]
    });
    geolocation = TestBed.get(Geolocation);
    nativeGeocoder = TestBed.get(NativeGeocoder);
  });

  it('should be created', () => {
    const service: GeolocService = TestBed.get(GeolocService);
    expect(service).toBeTruthy();
  });

  it('#findAllowedDistance should return correct distance from ageRange', () => {
  });
  it('#getCurrentLocation( should return the correct current geolocation coords', () => {
  });
  it('#calculateMapBounds should return the correct 4 coords mapBounds from current coords', () => {
  });
  it('#loadMapWithBounds should load the map with the correct mapBounds', () => {
  });
  it('#getGeoencoder should return correct address from current coords', () => {
  });
  it('#generateAddress should return a formatted address object', () => {
  });


});
