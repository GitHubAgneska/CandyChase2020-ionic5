import { Component, OnInit } from '@angular/core';
import { UserStatsService } from '../../shared/services/user-stats.service';
import { LevelI } from '../../shared/models/level.interface';
import { LevelApiService } from '../services/level-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {

/*public level: LevelI;
  public levels: LevelI[];
  public levels$: Observable<any[]> = new Observable(); */

  constructor(
    private userStatsService: UserStatsService,
    private levelApiService: LevelApiService
  ) {
/*  this.levels = [];
    this.level = { idLevel: 1, levelName: '1', levelImg: '', bannerMessage: '', levelCard: '', levelCardName: '' };
   */
  }

  ngOnInit() {

/*  test
    this.levels = this.userStatsService.retrieveLevelList(); // OK
    console.log(this.levels);
    this.level =  this.userStatsService.retrieveDefaultLevel();
    console.log(this.level);
*/
  }

}
