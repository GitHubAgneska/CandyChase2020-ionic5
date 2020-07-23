import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserStatsService } from '../../shared/services/user-stats.service';
import { LevelI } from '../../shared/models/level.interface';
import { Level } from '../../shared/models/level.model';
import { UserStatsI } from '../../shared/models/user-stats.interface';
import { KeyvaluePipe } from '../../shared/pipes/keyvalue/keyvalue';
import { LevelApiService } from '../services/level-api.service';


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
  public currentLevel: Level;
  public nextLevel: LevelI;
  public currentLevelName: string;

  public tricks: any[];
  public treats: any[];
  public completedChallenges: any[];
  public completedChallengesCount: number;

  public savedAddresses: any[];
  public savedAddressesCount: number;

  constructor(
    private userStatsService: UserStatsService,
    public keyvaluepipe: KeyvaluePipe,
    private router: Router
  ) {
    this.currentLevel =  new Level();
    this.levels = this.userStatsService.retrieveLevelList();
    this.completedChallenges = [];
    this.completedChallengesCount = 0;
  }

  ngOnInit() {
    this.setStats();
  }


  public setStats() {

    // totalPoints
    this.userStatsService.getCurrentTotalPoints().subscribe(data => this.totalPoints = data);
    // console.log('totalPoints------', this.totalPoints);

    // totalCandy
    this.userStatsService.getCurrentBackpackCount().subscribe(data => this.candyCount = data);
    // console.log('candy count------', this.candyCount);

    // level
    this.userStatsService.getCurrentLevel().subscribe(data => this.currentLevel = {...data} );
    // console.log('this.currentLevel=', this.currentLevel);

    // challenges count
    this.userStatsService.getCompletedChallengesCount().subscribe(data => this.completedChallengesCount = data);
    // console.log( 'count=', this.completedChallengesCount);

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

