import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserStatsService } from '../../shared/services/user-stats.service';
import { TrickAndTreatI } from '../../shared/models/challenges.interface';
import { ChallengesApiService } from '../services/challenges-api.service';
import { ToastController } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss'],
})
export class ChallengesComponent implements OnInit {

  public choice: string;
  public purpleBubbleImg = 'assets/graphicMat/purple_bubble.png';
  public candleSkullImg = 'assets/graphicMat/candle_skull.png';

  public currentChallenge: TrickAndTreatI;
  public treats: TrickAndTreatI[];
  public tricks: TrickAndTreatI[];

  public triggeredTricksList: TrickAndTreatI[];
  public triggeredTreatsList: TrickAndTreatI[];
  public achievedTricksList: TrickAndTreatI[];
  public achievedTreatsList: TrickAndTreatI[];

  public totalPoints: number;
  public newTotalPoints: number;
  public dataIsLoaded: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userStatsService: UserStatsService,
    private challengesApiService: ChallengesApiService,
    public toastController: ToastController,
    private location: Location,
    private router: Router
  ) {
    this.dataIsLoaded = false;

    this.treats = [];
    this.tricks = [];
    this.userStatsService.getCurrentTriggeredTreats().subscribe(data => this.triggeredTreatsList = data);
    this.userStatsService.getCurrentTriggeredTricks().subscribe(data => this.triggeredTricksList = data);
    this.userStatsService.getCurrentAchievedTreats().subscribe(data => this.achievedTreatsList = data);
    this.userStatsService.getCurrentAchievedTricks().subscribe(data => this.achievedTricksList = data);

    this.totalPoints = 0;
    this.newTotalPoints = 0;

    this.currentChallenge = {
      challengeId: 0,
      challengeType: '',
      challengeDescription: '',
      hasBeenCompleted: false,
      bonusPoints: 0 };
  }

  ngOnInit() {

    this.getChoice();
    this.getRandomChallenge(this.choice);
    this.userStatsService.getCurrentTotalPoints().subscribe(data => this.totalPoints = data);
    console.log('TOTAL POINTS before bonus==', this.totalPoints);
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
            this.currentChallenge = randomTreat;
            this.currentChallenge.challengeDescription = randomTreat.challengeDescription;
            this.currentChallenge.bonusPoints = randomTreat.bonusPoints;
            this.currentChallenge.challengeId = randomTreat.challengeId;
            this.currentChallenge.challengeType = randomTreat.challengeType;
            this.triggeredTreatsList.push(this.currentChallenge);
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
            this.currentChallenge = randomTrick;
            this.currentChallenge.challengeDescription = randomTrick.challengeDescription;
            this.currentChallenge.bonusPoints = randomTrick.bonusPoints;
            this.currentChallenge.challengeId = randomTrick.challengeId;
            this.currentChallenge.challengeType = randomTrick.challengeType;
            this.triggeredTricksList.push(this.currentChallenge);
            this.userStatsService.updateCurrentTriggeredTricks(this.triggeredTricksList);
          }
        });
    }
    this.dataIsLoaded = true;
  }


  public isDone() {

    this.newTotalPoints = this.totalPoints + this.currentChallenge.bonusPoints;
    this.userStatsService.update_totalPoints(this.newTotalPoints);
    this.presentToastBonusPoints(this.currentChallenge.bonusPoints, this.newTotalPoints);

    this.currentChallenge.hasBeenCompleted = true;
    console.log('TYPE==', this.currentChallenge.challengeType);
    if ( this.currentChallenge.challengeType === 'trick') {

      this.achievedTricksList.push(this.currentChallenge);
      this.userStatsService.updateCurrentAchievedTricks(this.achievedTricksList);
    } else { if (this.currentChallenge.challengeType === 'treat') {
      this.achievedTreatsList.push(this.currentChallenge);
      this.userStatsService.updateCurrentAchievedTreats(this.achievedTreatsList);
    }}
    this.router.navigate(['play/candyList', { hasBeenOpened: 'true '}]);
  }


  public isSkipped() {
    this.router.navigate(['play/candyList', { hasBeenOpened: 'true '}]);
  }


  async presentToastBonusPoints(bonusPoints: number, newTotalPoints: number) {
    const toast1 = await this.toastController.create({
      message: `BONUS:` + this.currentChallenge.bonusPoints +  `Points!`,
      position: 'middle',
      duration: 300,
      cssClass: 'new-points-toast',
    });
    const toast2 = await this.toastController.create({
      message: `TOTAL POINTS :` + this.totalPoints + `!`,
      position: 'middle',
      duration: 700,
      cssClass: 'new-totalpoints-toast'
    });
    toast1.present();

    setTimeout(() => {
        toast1.dismiss();
        toast2.present();
    }, 500);

    if (this.totalPoints % 30 === 0) {
      const toast3 = await this.toastController.create({
        position: 'middle',
        duration: 800,
        cssClass: 'levelUp-toast'
      });
      setTimeout(() => {
          toast2.dismiss();
          toast3.present();
      }, 500);
      // this.newChallenge = true;
    }
  }


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




/*  const randomElement = array[Math.floor(Math.random() * array.length)];
    const randomTrick = this.tricks[Math.floor(Math.random() * this.tricks.length)];
      this.challengeDescription = randomTrick.challengeDescription;
      this.bonusPoints = randomTrick.bonusPoints;  */

