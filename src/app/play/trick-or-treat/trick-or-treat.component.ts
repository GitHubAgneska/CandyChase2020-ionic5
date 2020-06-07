import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trick-or-treat',
  templateUrl: './trick-or-treat.component.html',
  styleUrls: ['./trick-or-treat.component.scss'],
})
export class TrickOrTreatComponent implements OnInit {

  public candyImg = 'assets/graphicMat/candy.png';
  public treatOrTrickImg = 'assets/graphicMat/trickOrTreat.png';
  public witchHatImg = 'assets/graphicMat/hat.png';

  constructor(
    private router: Router,
    ) { }

  ngOnInit() {}

  choseTreat() {
    this.router.navigate(['play/challenges', { choice: 'treat'}]);
  }

  choseTrick() {
    this.router.navigate(['play/challenges', { choice: 'trick'}]);
  }

}
