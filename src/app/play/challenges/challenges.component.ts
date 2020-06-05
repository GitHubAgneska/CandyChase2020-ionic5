import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss'],
})
export class ChallengesComponent implements OnInit {

  public choice: string;
  public purpleBubbleImg = 'assets/graphicMat/purple_bubble.png';
  public candleSkullImg = 'assets/graphicMat/candle_skull.png';

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(param => {
      this.choice = param.get('choice');
    });
    console.log('activated route param= ', this.choice);

    this.getRandomChallenge(this.choice);
  }

  public getRandomChallenge(choice: string) {
    
  }

}
