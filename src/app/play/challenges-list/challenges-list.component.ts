import { Component, OnInit } from '@angular/core';
import { UserStatsService } from '../../shared/services/user-stats.service';
import { TrickAndTreatI } from '../../shared/models/challenges.interface';
import { KeyvaluePipe } from '../../shared/pipes/keyvalue/keyvalue';

@Component({
  selector: 'app-challenges-list',
  templateUrl: './challenges-list.component.html',
  styleUrls: ['./challenges-list.component.scss'],
})
export class ChallengesListComponent implements OnInit {

  public achievedTricksList: TrickAndTreatI[];
  public achievedTreatsList: TrickAndTreatI[];
  public displayList: boolean;
  public listIsEmpty: boolean;
  public noChallengesYetImg = 'assets/graphicMat/noChallengesYet_bubble.png';

  constructor(
    private userStatsService: UserStatsService,
    public keyvaluepipe: KeyvaluePipe ) {

  }

  ngOnInit() {

    this.userStatsService.getCurrentAchievedTreats().subscribe(data => {
      this.achievedTreatsList = data;
      if (data.length > 0 ) { this.displayList = true; }
    });
    this.userStatsService.getCurrentAchievedTricks().subscribe(data => {
      this.achievedTricksList = data;
      if (data.length > 0 ) { this.displayList = true; }
    });
  }

}
