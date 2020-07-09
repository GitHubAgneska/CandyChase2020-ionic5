import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserStatsService } from '../../shared/services/user-stats.service';
import { LevelI } from '../../shared/models/level.interface';
import { UserStatsI } from '../../shared/models/user-stats.interface';
import { KeyvaluePipe } from '../../shared/pipes/keyvalue/keyvalue';


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

  public tricks: any[];
  public treats: any[];
  public completedChallengesCount: number;
  public completedChallengesTest: any[];

  public savedAddresses: any[];
  public savedAddressesCount: number;

  constructor(
    private userStatsService: UserStatsService,
    public keyvaluepipe: KeyvaluePipe,
    private router: Router
  ) {

    this.currentLevel =  { idLevel: 0, levelName: '', levelImg: '', levelCard: '', isActive: false, isNext: false };
    this.levels = this.userStatsService.retrieveLevelList();
    this.completedChallengesCount = 0;
    this.completedChallengesTest = [];
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
    console.log('levels---', this.levels);

    for ( let i = 0; i < this.levels.length; i++ ) {
      if ( this.levels[i].idLevel === this.currentLevel.idLevel ) {
        this.levels[i].isActive = true;
        this.levels[ i + 1 ].isNext = true;
      }
    }

    // current done challenges count
    this.userStatsService.getCompletedChallengesCount().subscribe(data => this.completedChallengesTest = data );
    console.log('RESULT OF ZIP==', this.completedChallengesTest);

    this.completedChallengesTest.map(item => {
      console.log(item.length);
      return this.completedChallengesCount += item.length;
    });



    // current saved addresses count
    this.userStatsService.getCurrentAddressesList().subscribe(data => this.savedAddresses = data );
    this.savedAddressesCount = this.savedAddresses.length;
  }


  public goToAddresses() {
    this.router.navigate(['play/addresses']);
  }

  public goToChallenges() {
    this.router.navigate(['play/challenges-list']);
  }


}

