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

  public testArrayOfObjects: any[];

  

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
    this.getRandomChallenge(this.choice);
  }

  public getChoice() {
    this.activatedRoute.paramMap.subscribe(param => {
      this.choice = param.get('choice');
    });
  }

  public getRandomChallenge(choice: string)  {

    this.choice = choice;
    if (this.choice === 'treat') {

      const myList: any[] = this.retrieveTreatsList();
      console.log('MY LIST==', myList);
      // tslint:disable-next-line: prefer-for-of

    } else {

      const myList2: any[] = this.retrieveTricksList();
      console.log('MY LIST==', myList2);

    }
    this.dataIsLoaded = true;
  }


  public retrieveTreatsList(): any {
    this.testArrayOfObjects = [];
    this.challengesApiService.getTreatsList()
    .subscribe( (data: any[]) => {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < data.length; i++) {
        this.treats.push(data[i]);
        this.testArrayOfObjects.push(data[i]);
      }
      console.log('TREATSLIST==', this.treats); // (3) [{…}, {…}, {…}]
      console.log('testArrayOfObjects==', this.testArrayOfObjects);
      return this.testArrayOfObjects;
    });
    return this.testArrayOfObjects;
 /*    console.log('TREATSLIST==', this.treats); // []
    console.log('testArrayOfObjects==', this.testArrayOfObjects);
    return this.treats; */
  }


  public retrieveTricksList(): TrickAndTreatI[] {
    this.challengesApiService.getTricksList()
    .subscribe( (data: any[]) => {
      // console.log('DATA TRICKS==', data); // (3) [{…}, {…}, {…}]

      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < data.length; i++) {
        // console.log('data[i]==', data[i]);
        this.tricks.push(data[i]);
      }
      // console.log('TRICKLIST==', this.tricks);
    });
    return this.tricks;
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

