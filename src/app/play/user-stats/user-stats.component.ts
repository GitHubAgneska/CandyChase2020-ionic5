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

  public cards: any[];
  public collectedCards: any[];
  public cardIsNext: boolean;

  public challenges: [];
  public challengesCount: number;

  public savedAddresses: [];
  public savedAddressesCount: number;

  constructor(
    private userStatsService: UserStatsService,
    private geolocService: GeolocService
  ) {
    this.cardIsNext = true;

  }

  ngOnInit() {
    this.setStats();
  }


  public setStats() {

    // totalPoints
    this.userStatsService.getCurrentTotalPoints().subscribe(data => this.totalPoints = data);
    console.log('totalPoints------', this.totalPoints);

    // totalCandy
    this.userStatsService.getCurrentBackpackCount().subscribe(data => this.candyCount = data);
    console.log('candy count------', this.candyCount);

    // currentLevel
    this.currentLevel = this.userStatsService.setCurrentLevel(this.totalPoints);
    console.log('levelName-------', this.currentLevel.levelName, this.currentLevel.levelCardName);
    // nextLevel
    // this.nextLevel = this.currentLevel + 1;


    // all cards
    this.collectedCards = this.userStatsService.getAllCards();
    console.log('collected cards----', this.collectedCards);


    // savedAddresses
  }


}

