import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

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
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {}

  choseTreat() {
    this.router.navigate(['/challenges']);
  }

  choseTrick() {
    this.router.navigate(['/challenges']);
  }

}
