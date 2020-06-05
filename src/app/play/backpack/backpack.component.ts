import { Component, OnInit } from '@angular/core';
import { CandyI, CandyChecklistI } from '../../shared/models/candy.interface';
import { Router } from '@angular/router';
import { UserStatsService } from '../../shared/services/user-stats.service';

@Component({
  selector: 'app-backpack',
  templateUrl: './backpack.component.html',
  styleUrls: ['./backpack.component.scss'],
})
export class BackpackComponent implements OnInit {

  public candyItem: CandyI;
  public collectedCandy: CandyI[];
  public totalCandy: number;
  public totalPoints: number;
  public candyId: string | number;

  // public noCandyYet: boolean;

  public ghostImg = 'assets/graphicMat/ghost_2.png';
  public ghostBubble = 'assets/graphicMat/noCandyYet_bubble.png';

  constructor(
    private userStatsService: UserStatsService,
    private router: Router
  ) {
    this.totalCandy = 0;
    // this.noCandyYet = false;
  }

  ngOnInit() {
    // retrieve all candy items
    this.setBackpack();
    this.setStats();
  }

  public setBackpack() {
    this.userStatsService.getCurrentBackpackContent().subscribe(data => {
      this.collectedCandy = data;
    });
    console.log('COLLECTED CANDY RETRIEVED ON INIT: ', this.collectedCandy);
  }

  public setStats() {
    this.userStatsService.getCurrentBackpackCount().subscribe(data => this.totalCandy = data );
    this.userStatsService.getCurrentTotalPoints().subscribe(data => this.totalPoints = data);

  }

  seeCandyInfos(id: string | number) {
    this.candyId = id;
    console.log('candy id= ', this.candyId);
    this.router.navigate(['play/candyDetails' + '/' + id]);
  }

}
