import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserStatsService } from '../shared/services/user-stats.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  public isPlaying: boolean;
  public userAgeRange: number;

  constructor(
    private router: Router,
    private userStatsService: UserStatsService
    ) {
      this.isPlaying = false;
    }

  ngOnInit() {
    this.userAgeRange = this.userStatsService.getCurrentAgeRange();
    console.log(this.userAgeRange);

    if ( this.userAgeRange ) {
      this.isPlaying = true;
    }

  }

  public start() {
    this.router.navigate(['start']);
  }
  public continue() {
    this.router.navigate(['/play/backpack']);
  }

  goToRules() {
    this.router.navigate(['static/rules']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToLegal() {
    this.router.navigate(['static/legal']);
  }

  goToAbout() {
    this.router.navigate(['static/about']);
  }


}
