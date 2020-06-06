import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserStatsService } from '../../shared/services/user-stats.service';
import { ChallengesI, TrickI, TreatI } from '../../shared/models/challenges.interface';
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

  // public challengesList$: Observable<ChallengesI[]>;

  public challengeList: ChallengesI;
  public treat: TreatI;
  public treats: TreatI[];
  public trick: TrickI;
  public tricks: TrickI[];
  public challengeDescription: string;
  public bonusPoints: number;

  public dataIsLoaded: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userStatsService: UserStatsService,
    private challengesApiService: ChallengesApiService
  ) {
    this.dataIsLoaded = false;
  }

  ngOnInit() {

    this.getChoice();
    this.getRandomChallenge(this.choice);
  }


  public getRandomChallenge(choice: string): any {

    this.choice = choice;
    // this.challengesList$ = challengesList;

    this.challengesApiService.getChallengesList().subscribe(data => {
      const challenges = data;
      console.log('challenges in challenge component== ', challenges);
      // => { tricks: Array(3), treats: Array(3) }
      const list = Object.keys(challenges).forEach((key, index) => {
        console.log('KEY= ', key, 'OBJ= ', challenges[key]);
        // KEY=  tricks OBJ=  (3) [{…}, {…}, {…}]
        // KEY=  treats OBJ=  (3) [{…}, {…}, {…}]
      });

    });

    if (this.choice === 'treat') {

      const randomTreat = this.treats[Math.floor(Math.random() * this.treats.length)];
      this.challengeDescription = randomTreat.challengeDescription;
      this.bonusPoints = randomTreat.bonusPoints;

    } else {

      const randomTrick = this.tricks[Math.floor(Math.random() * this.tricks.length)];
      this.challengeDescription = randomTrick.challengeDescription;
      this.bonusPoints = randomTrick.bonusPoints;
    }
    this.dataIsLoaded = true;
  }


  public getChoice() {
    this.activatedRoute.paramMap.subscribe(param => {
      this.choice = param.get('choice');
    });
    console.log('activated route param= ', this.choice);
  }


  /* public retrieveChallengeList(): ChallengesI[] {
    // this.challengesList$ = this.challengesApiService.getChallengesList();
    this.challengesApiService.getChallengesList().subscribe(data => {
      this.challengeList = data;
      console.log('this.challengeList in retrieveChallengeList 1==', this.challengeList );
      return this.challengeList as ChallengesI[];
    });
    return this.challengeList;
  } */

}

// const randomElement = array[Math.floor(Math.random() * array.length)];
