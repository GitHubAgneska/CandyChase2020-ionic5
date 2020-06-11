import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserStatsService } from '../shared/services/user-stats.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  public isPlaying: string;
  public newGame: boolean;
  public ongoing: boolean;
  public userAgeRange: number;

  constructor(
    private router: Router,
    private userStatsService: UserStatsService,
    private activatedRoute: ActivatedRoute,
    ) {

    }

  ngOnInit() {

    console.log('check ongoing triggered');
    this.activatedRoute.paramMap.subscribe(param => {
      this.isPlaying = param.get('isPlaying');
      if ( this.isPlaying === 'true') {
        this.newGame = false;
        this.ongoing = true;
        console.log('ONGOING');
      } else {
        this.newGame = true;
        this.ongoing = false;
        console.log('NEW GAME');
      }
    });
  }



  public start() {
    this.router.navigate(['start']);
  }

  public continue() {
    this.router.navigate(['/play/user-stats']);
  }

  goToRules() {
    this.router.navigate(['static/rules']);
  }

  goToLogin() {
    this.router.navigate(['login']);
  }

  goToLegal() {
    this.router.navigate(['static/legal']);
  }

  goToAbout() {
    this.router.navigate(['static/about']);
  }


}
