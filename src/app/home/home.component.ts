import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  constructor(
    private router: Router
    ) { }

  public start() {
    this.router.navigate(['start']);
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
