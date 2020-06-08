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
  public challengesList: TrickAndTreatI[];

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
  }

  ngOnInit() {

    this.getChoice();
    this.retrieveChallengeList();
    this.getRandomChallenge(this.choice);
  }


  public retrieveChallengeList() {
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
  }


  public getRandomChallenge(choice: string): any {
    this.choice = choice;

    console.log('TREATS IN GETRANDOM====', this.treats, // [ {...}, {...}, {...} ]
    'TREATS LENGTH===', this.treats.length, // 0 !!
    'TREATS OBJECT LENGTH===', Object.keys(this.treats).length,  // 0 !!
    'TREATS TYPE== ', typeof(this.treats)); // returns object :??

    if (this.choice === 'treat') {

     /*  const randomTreat = this.treats[Math.floor(Math.random() * this.treats.length)];
      this.challengeDescription = randomTreat.challengeDescription;
      this.bonusPoints = randomTreat.bonusPoints; */
      //


    } else {

     /*  const randomTrick = this.tricks[Math.floor(Math.random() * this.tricks.length)];
      this.challengeDescription = randomTrick.challengeDescription;
      this.bonusPoints = randomTrick.bonusPoints; */
    }
    this.dataIsLoaded = true;
  }


  public getChoice() {
    this.activatedRoute.paramMap.subscribe(param => {
      this.choice = param.get('choice');
    });
    console.log('activated route param= ', this.choice);
  }




}

// const randomElement = array[Math.floor(Math.random() * array.length)];
