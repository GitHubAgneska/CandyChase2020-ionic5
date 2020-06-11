import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-letsplay',
  templateUrl: './letsplay.component.html',
  styleUrls: ['./letsplay.component.scss'],
})
export class LetsplayComponent implements OnInit {

  constructor(private router: Router) { }

  public happyHuntImg = 'assets/graphicMat/happyHunt_small.png';

  ngOnInit() {}

  public goToMenu() {
    this.router.navigate(['menu']);
  }

  public goToRules() {
    this.router.navigate(['static/rules']);
  }

}
