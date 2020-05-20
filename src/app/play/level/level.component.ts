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
  ) { }


  ngOnInit() {
    this.setLevel();
  }


  public setLevel() {
  }

  public goToMyCards() {
    this.router.navigate(['play/cards']);
  }

}
