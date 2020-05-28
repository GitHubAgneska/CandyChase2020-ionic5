
// this service exists to :

// keep track and update / calculate

// *current backpack content*
// *current total points*
// *current level*
// *current set of cards*

// => these infos will be available
// accross all components of play module (as a badge displayed on pages)
// ( + will determine a *level color theme* in a future feature )

import { Injectable } from '@angular/core';
import { LevelApiService } from '../services/level-api.service';
import { LevelI } from '../../shared/models/level.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { CandyI } from '../../shared/models/candy.interface';
import { UserStatsI } from '../../shared/models/user-stats.interface'; 


@Injectable({
  providedIn: 'root'
})
export class UserStatsService {

  public level: LevelI;
  public levels: LevelI[];
  public nextLevel: LevelI;

  public itemsInBackpack: CandyI[];
  public itemsInBackpack$: Observable<CandyI[]>;
  public totalCandy: number;
  public totalPoints: number;

  public userStats: UserStatsI;

  // keep track of candy list in backpack --
  private backpackContent$ = new BehaviorSubject([]);

  // keep track of candy total --
  private totalCandyInBackpack$ = new BehaviorSubject(0);

  // keep track of total points --
  private totalPoints$ = new BehaviorSubject(this.totalPoints);

  // keep track of current level --  whole object
  public level$: BehaviorSubject<LevelI> = new BehaviorSubject(this.level);


  constructor(
    private levelApiService: LevelApiService
  ) {
    this.levelApiService.getLevelList().subscribe(data => {
      this.levels = data;
      this.level = this.levels[0];
      this.nextLevel = this.levels[1];
    });
    // this.userStats = {};
    this.itemsInBackpack = [];
    this.totalCandy = 0;
    this.totalPoints = this.totalCandy * 2;
  }

  public getCurrentUserStats() {
    // this.userStats.totalCandy = this.getCurrentBackpackCount().subscribe();
    this.getCurrentTotalPoints();
    this.getCurrentLevel();
  }

  // get level list from api (json atm)
  public retrieveLevelList() {
    return this.levels;
  }
  public retrieveDefaultLevel() {
    return this.level;
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


  // get current total points
  public getCurrentTotalPoints() {
    return this.totalPoints$.asObservable();
  }
  // update total points
  public update_totalPoints(totalPoints: number) {
    this.totalPoints$.next(totalPoints);
  }


  public setCurrentLevel(totalPoints: number) {

    this.levels = this.retrieveLevelList();
    this.totalPoints = totalPoints;

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
  }

    /* ------------------------------------------------------------------------------
      Method to count points depending on specific criteria, e.g candy item weight
        public setTotalPoints() {
          this.itemsInBackpack$ = this.getCurrentBackpackContent();
          this.itemsInBackpack$.forEach( item => {
            if ( item.serving_size ) { ... })
    } => not implementable atm for api data = not consistent enough */
  // => For now total points will be count as 2 points/ candy item
  //  ------------------------------------------------------------------------------

}
