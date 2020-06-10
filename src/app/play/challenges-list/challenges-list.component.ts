import { Component, OnInit } from '@angular/core';
import { UserStatsService } from '../../shared/services/user-stats.service';
import { TrickAndTreatI } from '../../shared/models/challenges.interface';

@Component({
  selector: 'app-challenges-list',
  templateUrl: './challenges-list.component.html',
  styleUrls: ['./challenges-list.component.scss'],
})
export class ChallengesListComponent implements OnInit {

  public currentListOfTricks: TrickAndTreatI[];
  public currentListOfTreats: TrickAndTreatI[];


  constructor( private userStatsService: UserStatsService ) {
    this.currentListOfTricks = [];
    this.currentListOfTreats = [];
  }

  ngOnInit() {

    this.userStatsService.getCurrentTriggeredTricks().subscribe(data => this.currentListOfTricks = data);
    this.userStatsService.getCurrentTriggeredTreats().subscribe(data => this.currentListOfTreats = data);
  }

}
