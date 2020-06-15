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
  public listIsEmpty: boolean;
  public noChallengesYetImg = 'assets/graphicMat/noChallengesYet_bubble.png';

  constructor( private userStatsService: UserStatsService ) {
    this.currentListOfTricks = [];
    this.currentListOfTreats = [];
    this.listIsEmpty = false;
  }

  ngOnInit() {

    this.userStatsService.getCurrentTriggeredTricks().subscribe(data => this.currentListOfTricks = data);
    this.userStatsService.getCurrentTriggeredTreats().subscribe(data => this.currentListOfTreats = data);
    if ( this.currentListOfTricks.length === 0 && this.currentListOfTreats.length === 0)  {
      this.listIsEmpty = true;
    }
  }
}
