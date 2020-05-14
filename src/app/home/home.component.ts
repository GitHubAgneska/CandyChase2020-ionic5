import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
    ) { }

  ngOnInit() {}

  start() {
    this.router.navigate(['start']);
  }

  goToRules() {
    this.router.navigate(['/rules']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToLegal() {
    this.router.navigate(['/legal']);
  }

  goToAbout() {
    this.router.navigate(['/about']);
  }


}
