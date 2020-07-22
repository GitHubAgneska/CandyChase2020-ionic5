
// this service exists to :

// keep track and update / calculate ALL USER STATS :

// *current backpack content*
// *current total points*
// *current level*
// *current set of cards*
// *current set of challenges* (triggered + achieved)
// *current set of saved addresses*

// => these infos will be available accross all components of the play module
// ( maybe as a badge displayed on pages in a future feature)
// ( + will determine a *level color theme* in a future feature )

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { zip } from 'rxjs';
import { LevelApiService } from '../../play/services/level-api.service';
import { CandyI } from '../models/candy.interface';
import { LevelI } from '../models/level.interface';
import { UserStatsI } from '../models/user-stats.interface';
import { TrickI, TreatI } from '../../shared/models/challenges.interface';
import { Trick, Treat } from '../../shared/models/challenges.model';
import { AddressI } from '../../shared/models/address.interface';


@Injectable({
  providedIn: 'root'
})
export class UserStatsService {

  public userAgeRange: number;

  public candyItem: CandyI;
  public itemsInBackpack: CandyI[];

  public totalCandy: number;
  public totalPoints: number;

  public levels: LevelI[];
  public currentLevel: LevelI;
  public nextLevel: LevelI;

  public treat: TreatI;
  public trick: TrickI;
  public challengesCount: number;

  public savedAddresses: AddressI[];
  public savedAddressesCount: number;


  // keep track of candy list in backpack --
  private backpackContent$ = new BehaviorSubject([]);

  // keep track of candy total --
  private totalCandyInBackpack$ = new BehaviorSubject(0);

  // keep track of total points --
  public totalPoints$ = new BehaviorSubject(0);

  // keep track of current level --  whole object
  public currentLevel$ = new BehaviorSubject(this.currentLevel);
  public currentLevelName$ = new BehaviorSubject('1');


  // keep track of current userStats --  whole object => TO IMPLEMENT
  public userStats: UserStatsI;
  private userStatsBehavior$ = new BehaviorSubject({});

  // keep track of which tricks/treats have been triggered
  private triggeredTricks$ = new BehaviorSubject([]);
  private triggeredTreats$ = new BehaviorSubject([]);

  private achievedTricks$: BehaviorSubject<Trick[]> = new BehaviorSubject([]);
  private achievedTreats$: BehaviorSubject<Treat[]> = new BehaviorSubject([]);
  private completedChallengesCount$ = new BehaviorSubject(0);

  // keep track of saved addresses list
  public savedAddressesBehavior$ = new BehaviorSubject([]);


  constructor(
    private levelApiService: LevelApiService
  ) {
    this.userAgeRange = 0;
    this.itemsInBackpack = [];
    this.totalCandy = 0;
    this.totalPoints = 0;
    this.candyItem = { _id: '', product_name: '', amountInBackpack: 0 };

    this.levelApiService.getLevelList().subscribe(data => {
      this.levels = data;
      this.currentLevel = this.levels[0];
      this.nextLevel = this.levels[1];
      this.currentLevel$ = new BehaviorSubject(this.currentLevel);
      this.currentLevelName$ = new BehaviorSubject('1');
    });

  }


  // ageRange ---------------------------------------------------
/*   public setCurrentAgeRange(age: number) {
    this.userAgeRange = age;
  }
  public getCurrentAgeRange() {
    return this.userAgeRange;
  } */


  // backpack content -------------------------------------------

  // get current list of candy in backpack
  public getCurrentBackpackContent() {
    return this.backpackContent$.asObservable();
  }
  // update backpack
  public update_backpackContent(itemsInBackpack: CandyI[]) {
    this.backpackContent$.next(itemsInBackpack);
  }

  // get current amount of candy in backpack
  public getCurrentBackpackCount() {
    return this.totalCandyInBackpack$.asObservable();
  }
  // update total candy
  public update_totalCandyCount(totalCandy: number) {
    this.totalCandyInBackpack$.next(totalCandy);
  }


  // total points -------------------------------------------------

  // get current total points
  public getCurrentTotalPoints() {
    return this.totalPoints$.asObservable();
  }
  // update total points
  public update_totalPoints(totalPoints: number) {
    this.totalPoints$.next(totalPoints);
    this.setCurrentLevel(totalPoints);
  }


  // level ---------------------------------------------------------

  // get level list from api (json atm)
  public retrieveLevelList() {
    return this.levels;
  }

  public setCurrentLevel(totalPoints: number): LevelI {

    this.levels = this.retrieveLevelList();

    if (totalPoints > 30 && totalPoints < 60) {
      this.currentLevel = this.levels[1];
    } else if (totalPoints >= 60 && totalPoints < 90) {
      this.currentLevel = this.levels[2];
      this.nextLevel = this.levels[3];
    } else if (totalPoints >= 90 && totalPoints < 120) {
      this.currentLevel = this.levels[3];
      this.nextLevel = this.levels[4];
    } else if (totalPoints >= 120 && totalPoints < 180) {
      this.currentLevel = this.levels[4];
      this.nextLevel = this.levels[5];
    } else if (totalPoints > 180) {
      this.currentLevel = this.levels[5];
      this.nextLevel = this.levels[6];
    } else {
      this.currentLevel = this.levels[0];
      this.nextLevel = this.levels[1];
    }
    this.update_level(this.currentLevel);
    this.update_levelName(this.currentLevel.levelName);
    return this.currentLevel;
  }

  // update current level
  public update_level(level: LevelI) {
    // console.log('update_level triggered');
    this.currentLevel$.next(level);
    this.currentLevel$.next({ idLevel: level.idLevel,
                              levelName: level.levelName,
                              levelImg: level.levelImg,
                              levelCard: level.levelCard,
                              isActive: level.isActive,
                              isNext: level.isNext });
  }
  // get current level
  public getCurrentLevel() {
    return this.currentLevel$.asObservable();
  }

  public update_levelName(name: string) {
    // console.log('update levelname triggered');
    this.currentLevelName$.next(name);
  }
  public getCurrentLevelName() {
    return this.currentLevelName$.asObservable();
  }



  // cards ---------------------------------------------------------

  public displayAllCardsWithState(currentLevel: LevelI) {

    this.levels.map(item => {

      if (item === currentLevel || item === this.nextLevel) {
        item.isActive = true;
      } else { item.isActive = false; }
    });
    return this.levels;
  }


  // challenges ---------------------------------------------------------

    // TRICKS follow up -----
  // keep list of which tricks have been (randomly) TRIGGERED
  public updateCurrentTriggeredTricks(triggeredTricksList: TrickI[]) {
    this.triggeredTricks$.next(triggeredTricksList);
  }
  public getCurrentTriggeredTricks() {
    return this.triggeredTricks$.asObservable();
  }
  // keep list of which tricks have been ACHIEVED
  public updateCurrentAchievedTricks(achievedTrickList: TrickI[]) {
    this.achievedTricks$.next(achievedTrickList);
  }
  public getCurrentAchievedTricks() {
    return this.achievedTricks$.asObservable();
  }

  // TREATS follow up -----
  // keep list of which treats have been (randomly) TRIGGERED
  public updateCurrentTriggeredTreats(triggeredTreatsList: TreatI[]) {
    this.triggeredTreats$.next(triggeredTreatsList);
  }
  public getCurrentTriggeredTreats() {
    return this.triggeredTreats$.asObservable();
  }
  // keep list of which treats have been ACHIEVED
  public updateCurrentAchievedTreats(achievedTreatList: TreatI[]) {
    this.achievedTreats$.next(achievedTreatList);
  }
  public getCurrentAchievedTreats() {
    return this.achievedTreats$.asObservable();
  }

  // --- completed challenges count
  public getCompletedChallengesCount() {
    return this.completedChallengesCount$.asObservable();
  }
  public updateCompletedChallengesCount(completedChallengesCount: number) {
    this.completedChallengesCount$.next(completedChallengesCount);
  }



  // saved addresses ---------------------------------------------------------

  getCurrentAddressesList() {
    return this.savedAddressesBehavior$.asObservable();
  }

  updateCurrentAddressesList(addressesList: AddressI[]) {
    this.savedAddressesBehavior$.next(addressesList);
  }


  // reset all  ---------------------------------------------------------
  public resetAllStats() {}

}

/* convert timestamp
var timestamp = 1301090400,
date = new Date(timestamp * 1000),
  datevalues = [
    date.getFullYear(),
    date.getMonth()+1, ( months based 0 )
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
]; */

/* ------------------------------------------------------------------------------
  Method to count points depending on specific criteria, e.g candy item weight
    => not implementable atm for api data = not consistent enough
//    => For now total points will be count as 6 points per candy item

    public setTotalPoints() {
      this.itemsInBackpack$ = this.getCurrentBackpackContent();
      this.itemsInBackpack$.forEach( item => {
        if ( item.serving_size ) { ... })
    }*/
  //  ------------------------------------------------------------------------------



