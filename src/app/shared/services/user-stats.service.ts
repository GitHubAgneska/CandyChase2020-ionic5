
// this service exists to :

// keep track and update / calculate ALL USER STATS :

// *current backpack content*
// *current total points*
// *current level*
// *current set of cards*
// *current set of saved addresses*
// *current set of challenges*

// => these infos will be available accross all components of the play module
// ( maybe as a badge displayed on pages in a future feature)
// ( + will determine a *level color theme* in a future feature )

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LevelApiService } from '../../play/services/level-api.service';
import { LevelI } from '../models/level.interface';
import { CandyI } from '../models/candy.interface';
import { UserStatsI } from '../models/user-stats.interface';
import { map } from 'rxjs/operators';
import { Coords } from 'leaflet';
import { ChallengesApiService } from '../../play/services/challenges-api.service';
import { ChallengesI, TrickI, TreatI } from '../../shared/models/challenges.interface';


@Injectable({
  providedIn: 'root'
})
export class UserStatsService {

  public userAgeRange: number;

  public candyItem: CandyI;
  public itemsInBackpack: CandyI[];
  public itemsInBackpack$: Observable<CandyI[]>;
  public totalCandy: number;
  public totalPoints: number;

  public level: LevelI;
  public levels: LevelI[];
  public currentLevel: LevelI;
  public nextLevel: LevelI;

  public card = { cardName: '', cardImg: '' };
  public collectedCards = [];
  public cardIsNext: boolean;

  public challenge: ChallengesI;
  public challenges: ChallengesI[];
  public challengesCount: number;
  public treat: TreatI;
  public trick: TrickI;


  public savedAddresses: [];
  public savedAddressesCount: number;


  // keep track of candy list in backpack --
  private backpackContent$ = new BehaviorSubject([]);

  // keep track of candy total --
  private totalCandyInBackpack$ = new BehaviorSubject(0);

  // keep track of total points --
  public totalPoints$ = new BehaviorSubject(0);

  // keep track of current level --  whole object
  public level$ = new BehaviorSubject({});

  // keep track of current userStats --  whole object
  public userStats: UserStatsI;
  private userStatsBehavior$ = new BehaviorSubject({});

  // keep track of saved addresses list
  public savedAddressesBehavior$ = new BehaviorSubject([]);



  constructor(
    private levelApiService: LevelApiService,
    private challengesApiService: ChallengesApiService
  ) {
    this.userAgeRange = 0;
    this.itemsInBackpack = [];
    this.totalCandy = 0;
    this.totalPoints = 0;
    this.candyItem = { _id: '', product_name: '', amountInBackpack: 0 };

    this.levelApiService.getLevelList().subscribe(data => {
      this.levels = data;
      this.level = this.levels[0];
      this.nextLevel = this.levels[1];
    });
  }


  // all stats -------------------------------------------------
  /*  public getCurrentUserStats(): Observable<UserStatsI> {
      return of(this.userStats);
    } */



  // ageRange ---------------------------------------------------
  public setCurrentAgeRange(age: number) {
    this.userAgeRange = age;
  }
  public getCurrentAgeRange() {
    return this.userAgeRange;
  }



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
  }


  // level ---------------------------------------------------------

  // get level list from api (json atm)
  public retrieveLevelList() {
    return this.levels;
  }

  // get current level
  public getCurrentLevel() {
    // this.setCurrentLevel(this.totalPoints);
    return this.level$.asObservable();
  }
  // update current level ( besides regular points count )
  public update_level(level: LevelI) {
    this.level$.next(level);
  }



  public setCurrentLevel(totalPoints: number): LevelI {

    this.levels = this.retrieveLevelList();

    if (totalPoints > 30 && totalPoints < 60) {
      this.level = this.levels[1];
    } else if (totalPoints >= 60 && totalPoints < 120) {
      this.level = this.levels[2];
    } else if (totalPoints >= 120 && totalPoints < 180) {
      this.level = this.levels[3];
    } else if (totalPoints >= 180 && totalPoints < 240) {
      this.level = this.levels[4];
    } else if (totalPoints > 240) {
      this.level = this.levels[5];
    } else {
      this.level = this.levels[0];
    }
    this.update_level(this.level);
    return this.level;
  }



  // cards ---------------------------------------------------------

  public getAllCards(): any {

    this.levels = this.retrieveLevelList();
    this.levels.forEach(item => {
      return (this.collectedCards.push(item.levelCard));
    });
    return this.collectedCards;
  }



  // saved addresses ---------------------------------------------------------

  getCurrentAddressesList() {
    return this.savedAddressesBehavior$.asObservable;
  }

  updateCurrentAddressesList(address: any) {
    this.savedAddressesBehavior$.next(address);
  }


  // challenges ---------------------------------------------------------

    // get challenges list from api (json atm)
  public retrieveChallengesData() {

    return this.challenges;
  }

}


/* ------------------------------------------------------------------------------
  Method to count points depending on specific criteria, e.g candy item weight
    public setTotalPoints() {
      this.itemsInBackpack$ = this.getCurrentBackpackContent();
      this.itemsInBackpack$.forEach( item => {
        if ( item.serving_size ) { ... })
} => not implementable atm for api data = not consistent enough */
  // => For now total points will be count as 6 points per candy item
  //  ------------------------------------------------------------------------------


