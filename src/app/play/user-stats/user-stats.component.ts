import { Component, OnInit } from '@angular/core';

import { UserStatsService } from '../../shared/services/user-stats.service';
import { LevelI } from '../../shared/models/level.interface';
import { UserStatsI } from '../../shared/models/user-stats.interface';
import { GeolocService } from '../../shared/services/geoloc.service';
import { Coords } from 'leaflet';
import { KeyvaluePipe } from '../../shared/pipes/keyvalue/keyvalue';
import { LevelApiService } from '../services/level-api.service';
import { Router } from '@angular/router';


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
  public currentLevelName: string;

  public cards: string[];
  public allCards: any[];
  public cardIsNext: boolean;
  public activeCards: string[];

  public tricks: any[];
  public treats: any[];
  public completedChallengesCount: number;

  public savedAddresses: Coords[];
  public savedAddressesCount: number;

  constructor(
    private userStatsService: UserStatsService,
    private levelApiService: LevelApiService,
    private geolocService: GeolocService,
    public keyvaluepipe: KeyvaluePipe,
    private router: Router
  ) {

    // this.cardIsNext = true;
    this.activeCards = [];
    this.currentLevel =  { idLevel: 0, levelName: '', levelImg: '', levelCard: '', isActive: false, isNext: false };
    this.levels = this.userStatsService.retrieveLevelList();
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

    // level
    // this.userStatsService.getCurrentLevelName().subscribe(data => this.currentLevelName = data);
    // console.log('current level name-----', this.currentLevelName);

    this.userStatsService.getCurrentLevel().subscribe(data => {
      this.currentLevel.idLevel = data.idLevel,
      this.currentLevel.levelName = data.levelName,
      this.currentLevel.levelImg = data.levelImg;
      this.currentLevel.levelCard = data.levelCard;
      this.currentLevel.isActive = data.isActive;
      this.currentLevel.isNext = data.isNext;
    });
    console.log('currentlevel levelcard-----', this.currentLevel.levelCard);

    // bottom cards
    // this.levels = this.userStatsService.retrieveLevelList();   // ISSUE OF SYNC
    console.log('levels---', this.levels);

    for ( let i = 0; i < this.levels.length; i++ ) {
      if ( this.levels[i].idLevel === this.currentLevel.idLevel ) {
        this.levels[i].isActive = true;
        this.levels[ i + 1 ].isNext = true;
      }
    }
    // current done challenges

  }
  public goToAddresses() {
    this.router.navigate(['play/addresses']);
  }

  public goToChallenges() {
    this.router.navigate(['play/challenges-list']);
  }


}

