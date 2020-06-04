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
  public candyCount: number;

  public levels: LevelI[];
  public currentLevel: LevelI;
  public nextLevel: LevelI;

  public collectedCards = [];
  public cardIsNext: boolean;

  public challenges: [];
  public challengesCount: number;

  public savedAddresses: [];
  public savedAddressesCount: number;

  constructor(
    private userStatsService: UserStatsService,
    private geolocService: GeolocService
  ) {

  }

  ngOnInit() {
    this.setStats();
  }


  public setStats() {

    this.userStatsService.getCurrentTotalPoints().subscribe(data => this.totalPoints = data);
    console.log('------', this.totalPoints);

    this.userStatsService.getCurrentBackpackCount().subscribe(data => this.candyCount = data);
    console.log('------', this.candyCount);

    this.currentLevel = this.userStatsService.setCurrentLevel(this.totalPoints);
    console.log(this.currentLevel.levelName);
  }

}

