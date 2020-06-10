import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserStatsService } from '../../shared/services/user-stats.service';
import { TrickAndTreatI } from '../../shared/models/challenges.interface';
import { Observable } from 'rxjs';
import { ChallengesApiService } from '../services/challenges-api.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss'],
})
export class ChallengesComponent implements OnInit {

  public choice: string;
  public purpleBubbleImg = 'assets/graphicMat/purple_bubble.png';
  public candleSkullImg = 'assets/graphicMat/candle_skull.png';

  public treat: TrickAndTreatI;
  public trick: TrickAndTreatI;
  public treats: TrickAndTreatI[];
  public tricks: TrickAndTreatI[];

  public triggeredTricksList: TrickAndTreatI[];
  public triggeredTreatsList: TrickAndTreatI[];

  public challengeDescription: string;
  public bonusPoints: number;
  public hasBeenCompleted: boolean;

  public dataIsLoaded: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userStatsService: UserStatsService,
    private challengesApiService: ChallengesApiService
  ) {
    this.dataIsLoaded = false;

    this.treats = [];
    this.tricks = [];
    this.triggeredTreatsList = [];
    this.triggeredTricksList = [];
  }

  ngOnInit() {

    this.getChoice();
    this.getRandomChallenge(this.choice);
  }


  public getChoice() {
    this.activatedRoute.paramMap.subscribe(param => {
      this.choice = param.get('choice');
    });
  }


  public getRandomChallenge(choice: string) {

    this.choice = choice;

    if (this.choice === 'treat') {

      this.challengesApiService.getTreatsList()
        .subscribe((data: any[]) => {
          // tslint:disable-next-line: prefer-for-of
          for (let i = 0; i < data.length; i++) {
            this.treats.push(data[i]);
            const randomTreat = this.treats[Math.floor(Math.random() * this.treats.length)];
            this.challengeDescription = randomTreat.challengeDescription;
            this.bonusPoints = randomTreat.bonusPoints;
            this.triggeredTreatsList.push(randomTreat);
            this.userStatsService.updateCurrentTriggeredTreats(this.triggeredTreatsList);
          }
          console.log('TREATSLIST==', this.treats); // (3) [{…}, {…}, {…}]
        });

    } else {

      this.challengesApiService.getTricksList()
        .subscribe((data: any[]) => {
          // tslint:disable-next-line: prefer-for-of
          for (let i = 0; i < data.length; i++) {
            this.tricks.push(data[i]);
            const randomTrick = this.tricks[Math.floor(Math.random() * this.tricks.length)];
            this.challengeDescription = randomTrick.challengeDescription;
            this.bonusPoints = randomTrick.bonusPoints;
            this.triggeredTricksList.push(randomTrick);
            this.userStatsService.updateCurrentTriggeredTricks(this.triggeredTricksList);
          }
        });
    }
    this.dataIsLoaded = true;
  }








  // whole list
  /* public retrieveChallengeList() {
    this.challengesApiService.getChallengesList().subscribe(data => {
      console.log(data);
      this.challengesList = data;
      console.log('CHALLENGE LIST=== ', this.challengesList);

      this.challengesList.forEach(item => {
        if (item.challengeType === 'treat') {
          this.treats.push(item);
          return this.treats;
        } else {
          if (item.challengeType === 'trick') {
            this.tricks.push(item);
            return this.tricks;
          }
        }
      });
      console.log(this.treats);
    });
  } */


}

/*  const randomElement = array[Math.floor(Math.random() * array.length)];
    const randomTrick = this.tricks[Math.floor(Math.random() * this.tricks.length)];
      this.challengeDescription = randomTrick.challengeDescription;
      this.bonusPoints = randomTrick.bonusPoints;  */

