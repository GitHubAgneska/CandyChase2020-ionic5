import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserStatsService } from '../../shared/services/user-stats.service';
import { TrickAndTreatI, TrickI, TreatI } from '../../shared/models/challenges.interface';
import { TrickAndTreat, Trick, Treat } from '../../shared/models/challenges.model';
import { ChallengesApiService } from '../services/challenges-api.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss'],
})
export class ChallengesComponent implements OnInit {

  public choice: string;
  public purpleBubbleImg = 'assets/graphicMat/purple_bubble.png';
  public candleSkullImg = 'assets/graphicMat/candle_skull.png';

  public currentChallenge: Partial<TrickAndTreatI>;
  public treats: TreatI[];
  public tricks: TrickI[];
  public triggeredTricksList: TrickI[];
  public triggeredTreatsList: TreatI[];
  public achievedTricksList: TrickI[];
  public achievedTreatsList: TreatI[];

  public totalPoints: number;
  public newTotalPoints: number;
  public dataIsLoaded: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userStatsService: UserStatsService,
    private challengesApiService: ChallengesApiService,
    public toastController: ToastController,
    private router: Router
  ) {
    this.dataIsLoaded = false;
    this.treats = [];
    this.tricks = [];
    this.totalPoints = 0;
    this.newTotalPoints = 0;
  }

  ngOnInit() {
    this.userStatsService.getCurrentTriggeredTreats().subscribe(data => this.triggeredTreatsList = data);
    this.userStatsService.getCurrentTriggeredTricks().subscribe(data => this.triggeredTricksList = data);
    this.userStatsService.getCurrentAchievedTreats().subscribe(data => this.achievedTreatsList = data);
    this.userStatsService.getCurrentAchievedTricks().subscribe(data => this.achievedTricksList = data);
    this.userStatsService.getCurrentTotalPoints().subscribe(data => this.totalPoints = data);

    this.getChoice();
    this.getRandomChallenge(this.choice);
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
      this.currentChallenge = new Treat();

      this.challengesApiService.getTreatsList()
        .subscribe((data: Treat[]) => {
          // tslint:disable-next-line: prefer-for-of
          for (let i = 0; i < data.length; i++) {
            this.treats.push(data[i]);
            const randomTreat = this.treats[Math.floor(Math.random() * this.treats.length)];
            this.currentChallenge = randomTreat;
            this.currentChallenge.challengeDescription = randomTreat.treatDescription;
            this.currentChallenge.bonusPoints = randomTreat.bonusPoints;
            this.currentChallenge.challengeId = randomTreat.treatId;
            this.currentChallenge.challengeType = 'treat';
          }
          console.log('triggeredTreatsList before update==', this.triggeredTreatsList);
          this.triggeredTreatsList.push({ ...this.currentChallenge } as TreatI);
          console.log('triggeredTreatsList after update==', this.triggeredTreatsList);

          this.userStatsService.updateCurrentTriggeredTreats(this.triggeredTreatsList);
          // console.log('TREATSLIST==', this.treats); // (3) [{…}, {…}, {…}]
          console.log('CURRENT CHALLENGE==', {... this.currentChallenge } );
          return { ...this.currentChallenge } ;
        });

    } else {
      this.currentChallenge = new Trick();
      this.challengesApiService.getTricksList()
        .subscribe((data: Trick[]) => {
          // tslint:disable-next-line: prefer-for-of
          for (let i = 0; i < data.length; i++) {
            this.tricks.push(data[i]);
            const randomTrick = this.tricks[Math.floor(Math.random() * this.tricks.length)];
            this.currentChallenge = randomTrick;
            this.currentChallenge.challengeDescription = randomTrick.trickDescription;
            this.currentChallenge.bonusPoints = randomTrick.bonusPoints;
            this.currentChallenge.challengeId = randomTrick.trickId;
            this.currentChallenge.challengeType = 'trick';
          }
          this.triggeredTricksList.push({ ...this.currentChallenge } as TrickI);
          this.userStatsService.updateCurrentTriggeredTricks(this.triggeredTricksList);
          console.log('CURRENT CHALLENGE==', {... this.currentChallenge } );
          return { ...this.currentChallenge } ;
        });
    }
    this.dataIsLoaded = true;
  }


  public isDone(currentChallenge: any) {

    this.currentChallenge = currentChallenge;
    console.log('CURRENT IS DONE== ', this.currentChallenge);
    this.currentChallenge.challengeType = currentChallenge.challengeType;
    console.log('CURRENT IS DONE TYPE==', this.currentChallenge.challengeType);

    this.newTotalPoints = this.totalPoints + this.currentChallenge.bonusPoints;
    this.userStatsService.update_totalPoints(this.newTotalPoints);
    this.presentToastBonusPoints(this.currentChallenge.bonusPoints, this.newTotalPoints);

    console.log('CURRENT TRICKS LIST==', this.achievedTricksList);
    console.log('CURRENT TREATS LIST==', this.achievedTreatsList);

    if ( this.currentChallenge.challengeType === 'trick') {
      this.currentChallenge.hasBeenCompleted = true;
      this.achievedTricksList.push({ ...this.currentChallenge } as TrickI);
      this.userStatsService.updateCurrentAchievedTricks(this.achievedTricksList);

    } else { if (this.currentChallenge.challengeType === 'treat') {
      this.currentChallenge.hasBeenCompleted = true;
      this.achievedTreatsList.push({ ...this.currentChallenge } as TreatI);
      this.userStatsService.updateCurrentAchievedTreats(this.achievedTreatsList);
    }}
    this.router.navigate(['play/user-stats']);
  }


  public isSkipped() {
    this.router.navigate(['play/user-stats']);
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
    }
  }

}

