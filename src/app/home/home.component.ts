import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserStatsService } from '../shared/services/user-stats.service';
import { GeolocService } from '../shared/services/geoloc.service';
import { environment } from '../../environments/environment';

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
  public routeParams: any;
  public assetsPath = `${environment.graphicMat}`;

  // menu imgs
  public menuRules = this.assetsPath + 'menu_rules.png';
  public menuResume = this.assetsPath + 'menu_resume-bright.png';
  public menuPlay = this.assetsPath + 'menu_play-bright.png';
  public menuNewGame = this.assetsPath + 'newGame_bubble-bright.png';
  public menuLogin = this.assetsPath + 'menu_login.png';
  public menuAbout = this.assetsPath + 'menu_about.png';
  public menuLegal = this.assetsPath + 'menu_legal.png';

  constructor(
    private router: Router,
    private geolocService: GeolocService,
    private activatedRoute: ActivatedRoute,
    private userStatsService: UserStatsService
    ) {}

  ngOnInit() {

    this.geolocService.getCurrentLocation();

    console.log('check ongoing triggered');
    this.activatedRoute.paramMap.subscribe(param => {
      this.isPlaying = param.get('isPlaying');
      if ( this.isPlaying === 'true') {
        console.log('ONGOING');
        // set menu images
        this.newGame = false;
        this.ongoing = true;
        // set route params
        this.routeParams = 'resumePlaying';

      } else {
        console.log('NEW GAME');
        this.newGame = true;
        this.ongoing = false;
        this.routeParams = '';
      }
    });
  }

  public resetAllStats() {}


  public start() {
    this.router.navigate(['start']);
  }

  public continue() {
    this.router.navigate(['play/candyList', { routeParams: `${this.routeParams}` } ]);
    // this.router.navigate(['/play/user-stats']);
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
