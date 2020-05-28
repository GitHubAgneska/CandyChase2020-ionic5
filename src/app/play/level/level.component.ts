import { Component, OnInit } from '@angular/core';
import { LevelI } from '../../shared/models/level.interface';
import { Router } from '@angular/router';
import { LevelApiService } from '../services/level-api.service';
import { UserStatsService } from '../services/user-stats.service';
@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss'],
})
export class LevelComponent implements OnInit {

  public levels: LevelI[];
  public currentLevel: LevelI;
  public nextLevel: LevelI;

  constructor(
    private router: Router,
    private userStatsService: UserStatsService,
    private levelApiService: LevelApiService
  ) {
    this.levels = this.userStatsService.retrieveLevelList();
    // this.currentLevel = this.userStatsService.retrieveDefaultLevel();
  }


  ngOnInit() {
    this.setLevel();
  }


  public setLevel() {
    console.log(this.levels);
    this.currentLevel = this.levels[0];
    this.nextLevel = this.levels[1];
    // this.userStatsService.getCurrentLevel();
  }

/*   public goToMyCards() {
    this.router.navigate(['play/cards']);
  } */

}
