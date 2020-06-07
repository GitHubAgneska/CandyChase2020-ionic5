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
  public activeCards: any[];

  public challenges: [];
  public challengesCount: number;

  public savedAddresses: [];
  public savedAddressesCount: number;

  constructor(
    private userStatsService: UserStatsService,
    private geolocService: GeolocService
  ) {
    this.cardIsNext = true;
    this.activeCards = [];

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
    console.log('levelName-------', this.currentLevel.idLevel, this.currentLevel.levelName,
    this.currentLevel.levelCardName, this.currentLevel.levelImg);

    this.setActiveCards(this.currentLevel);
    // savedAddresses
  }


  public setActiveCards(currentLevel: LevelI) {

      this.currentLevel = currentLevel;
      // all cards
      this.collectedCards = this.userStatsService.getAllCards();
      console.log('collected cards----', this.collectedCards);
      //   0: "assets/graphicMat/ghost_card.png"
        /* 1: "assets/graphicMat/pumpkin_card.png"
          2: "assets/graphicMat/blackcat_card.png"
          3: "assets/graphicMat/witch_card.png"
          4: "assets/graphicMat/mystery_card.png" */

      for (let i = 0; i <= this.collectedCards.length; i++ ) {
        if (this.collectedCards[i + 1] <= this.currentLevel.idLevel ) {
          this.activeCards.push(this.collectedCards[i]);
        }
      }
      console.log('this.activeCards==', this.activeCards);
      return this.activeCards;
  }


}

