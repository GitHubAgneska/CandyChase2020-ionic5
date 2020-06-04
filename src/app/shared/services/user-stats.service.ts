
// this service exists to :

// keep track and update / calculate ALL USER STATS :

// *current backpack content*
// *current total points*
// *current level*
// *current set of cards*
// *current set of saved addresses
// *current set of challenges


// => these infos will be available accross all components of the play module
// ( maybe as a badge displayed on pages in a future feature)
// ( + will determine a *level color theme* in a future feature )

import { Injectable } from '@angular/core';
import { LevelApiService } from '../../play/services/level-api.service';
import { LevelI } from '../models/level.interface';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { CandyI } from '../models/candy.interface';
import { UserStatsI } from '../models/user-stats.interface';


@Injectable({
  providedIn: 'root'
})
export class UserStatsService {

  public userAgeRange: number;

  public level: LevelI;
  public levels: LevelI[];
  public nextLevel: LevelI;

  public itemsInBackpack: CandyI[];
  public itemsInBackpack$: Observable<CandyI[]>;
  public totalCandy: number;
  public totalPoints: number;


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
  private userStatsBehavior$ = new BehaviorSubject(this.userStats);

  constructor(
    private levelApiService: LevelApiService
  ) {
    this.levelApiService.getLevelList().subscribe(data => {
      this.levels = data;
      this.level = this.levels[0];
      this.nextLevel = this.levels[1];
    });
    this.itemsInBackpack = [];
    this.totalCandy = 0;
    this.totalPoints = 0;
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

    if (totalPoints > 7 && totalPoints <= 12) {
      this.level = this.levels[1];
      this.nextLevel = this.levels[2];
    } else if (totalPoints > 12 && totalPoints <= 18) {
      this.level = this.levels[2];
      this.nextLevel = this.levels[3];
    } else if (totalPoints > 18) {
      this.level = this.levels[3];
      this.nextLevel = this.levels[4];
    } else {
      this.level = this.levels[0];
      this.nextLevel = this.levels[1];
    }
    this.update_level(this.level);
    return this.level;
  }


}


    /* ------------------------------------------------------------------------------
      Method to count points depending on specific criteria, e.g candy item weight
        public setTotalPoints() {
          this.itemsInBackpack$ = this.getCurrentBackpackContent();
          this.itemsInBackpack$.forEach( item => {
            if ( item.serving_size ) { ... })
    } => not implementable atm for api data = not consistent enough */
  // => For now total points will be count as 2 points per candy item
  //  ------------------------------------------------------------------------------


