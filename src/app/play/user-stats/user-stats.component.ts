import { Component, OnInit } from '@angular/core';
import { UserStatsService } from '../services/user-stats.service';
import { LevelI } from '../../shared/models/level.interface';
import { GeolocService } from '../../shared/services/geoloc.service';

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.scss'],
})
export class UserStatsComponent implements OnInit {

  public totalPoints: number;
  public currentLevel: LevelI;

  constructor(
    private userStatsService: UserStatsService, private geolocService: GeolocService
  ) {
    this.totalPoints = 0;
    this.currentLevel = this.userStatsService.retrieveDefaultLevel();
  }

  ngOnInit() {

    this.geolocService.getCurrentLocation();

    this.userStatsService.getCurrentTotalPoints();
    console.log(this.totalPoints);

    this.userStatsService.getCurrentLevel();
    console.log(this.currentLevel);
  }

}