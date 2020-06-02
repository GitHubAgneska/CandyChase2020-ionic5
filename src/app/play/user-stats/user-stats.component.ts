import { Component, OnInit } from '@angular/core';
import { UserStatsService } from '../../shared/services/user-stats.service';
import { LevelI } from '../../shared/models/level.interface';
import { UserStatsI } from '../../shared/models/user-stats.interface'; 
import { GeolocService } from '../../shared/services/geoloc.service';

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.scss'],
})
export class UserStatsComponent implements OnInit {

  public userStats: UserStatsI;

  public totalPoints: number;

  public levels: LevelI[];
  public currentLevel: LevelI;
  public nextLevel: LevelI;

  public cards = [];
  public cardIsNext: boolean;

  constructor(
    private userStatsService: UserStatsService, private geolocService: GeolocService
  ) {
    // this.userStats = this.userStatsService.getCurrentUserStats();
    this.totalPoints = 0;
    this.currentLevel = this.userStatsService.retrieveDefaultLevel();
    this.levels = this.userStatsService.retrieveLevelList();
    this.cardIsNext = true;
  }

  ngOnInit() {
  console.log('this.userStatsService.getCurrentUserStats = ', this.userStatsService.getCurrentUserStats());
    // this.setLevel();

    // this.geolocService.getCurrentLocation();

/*  this.userStatsService.getCurrentTotalPoints();
    console.log('total point: ', this.totalPoints);

    this.userStatsService.getCurrentLevel();
    console.log('current level: ', this.currentLevel); */
  }

  /* public setLevel() {
    console.log(this.levels);
    this.currentLevel = this.levels[0];
    this.nextLevel = this.levels[1];
    this.cards = [
      this.levels[0].levelCard,
      this.levels[1].levelCard,
      this.levels[2].levelCard,
      this.levels[3].levelCard,
    ];
    // this.userStatsService.getCurrentLevel();
  } */

}
