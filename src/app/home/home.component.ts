import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserStatsService } from '../shared/services/user-stats.service';
import { GeolocService } from '../shared/services/geoloc.service';

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

  // menu imgs
  public menuRules = 'assets/graphicMat/menu_rules.png';
  public menuResume = 'assets/graphicMat/menu_resume-bright.png';
  public menuPlay = 'assets/graphicMat/menu_play-bright.png';
  public menuNewGame = 'assets/graphicMat/newGame_bubble-bright.png';
  public menuLogin = 'assets/graphicMat/menu_login.png';
  public menuAbout = 'assets/graphicMat/menu_about.png';
  public menuLegal = 'assets/graphicMat/menu_legal.png';

  constructor(
    private router: Router,
    private geolocService: GeolocService,
    private activatedRoute: ActivatedRoute,
    private userStatsService: UserStatsService
    ) {

    }

  ngOnInit() {

    this.geolocService.getCurrentLocation();

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

  public resetAllStats() {

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
