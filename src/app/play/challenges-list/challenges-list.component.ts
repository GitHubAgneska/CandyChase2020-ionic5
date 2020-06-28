import { Component, OnInit } from '@angular/core';
import { UserStatsService } from '../../shared/services/user-stats.service';
import { TrickAndTreatI, TrickI, TreatI } from '../../shared/models/challenges.interface';
import { KeyvaluePipe } from '../../shared/pipes/keyvalue/keyvalue';

@Component({
  selector: 'app-challenges-list',
  templateUrl: './challenges-list.component.html',
  styleUrls: ['./challenges-list.component.scss'],
})
export class ChallengesListComponent implements OnInit {

  public achievedTricksList: TrickI[];
  public achievedTreatsList: TreatI[];
  public achievedTricksdisplay: boolean;
  public achievedTreatsdisplay: boolean;
  public listIsEmpty: boolean;
  public noChallengesYetImg = 'assets/graphicMat/noChallengesYet_bubble.png';
  public iconTrue = 'assets/icon/icon_true.png';

  constructor(
    private userStatsService: UserStatsService,
    public keyvaluepipe: KeyvaluePipe ) {
      this.achievedTricksList = [];
      this.achievedTreatsList = [];
  }

  ngOnInit() {

    this.userStatsService.getCurrentAchievedTreats().subscribe(data => {
      this.achievedTreatsList = data;
      console.log('TREATS LIST=', this.achievedTreatsList);
      if (data.length > 0 ) { this.achievedTreatsdisplay = true; }
    });
    this.userStatsService.getCurrentAchievedTricks().subscribe(data => {
      this.achievedTricksList = data;
      console.log('TRICKS LIST=', this.achievedTricksList);
      if (data.length > 0 ) { this.achievedTricksdisplay = true; }
    });
  }

}
