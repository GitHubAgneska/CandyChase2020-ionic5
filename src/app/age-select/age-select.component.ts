import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeolocService } from '../shared/services/geoloc.service';
import { UserStatsService } from '../shared/services/user-stats.service';

export class Button {
  ageRange: number;
  age: string;
}
@Component({
  selector: 'app-age-select',
  templateUrl: './age-select.component.html',
  styleUrls: ['./age-select.component.scss'],
})
export class AgeSelectComponent implements OnInit {

  public buttons: Button[];
  public userAgeRange: number;

  constructor(
    private router: Router,
    private geolocService: GeolocService,
    private userStatsService: UserStatsService
    ) {

    this.buttons = [
      { ageRange: 1, age: '3 - 6' },
      { ageRange: 2, age: '7 - 9' },
      { ageRange: 3, age: '10+' }
    ];
  }

  ngOnInit() { }

  public selectAge(ageRange: number) {

    this.userAgeRange = ageRange;
    console.log('user age= ', this.userAgeRange);

    this.userStatsService.setCurrentAgeRange(this.userAgeRange);
    this.geolocService.setAgeRange(this.userAgeRange);
    // this.geolocService.findAllowedDistance(this.userAgeRange);
    this.router.navigate(['/play']);
  }

}
