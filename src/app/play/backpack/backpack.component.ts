import { Component, OnInit } from '@angular/core';
import { CandyI, CandyChecklistI } from '../../shared/models/candy.interface';
import { Router } from '@angular/router';
import { UserStatsService } from '../services/user-stats.service';

@Component({
  selector: 'app-backpack',
  templateUrl: './backpack.component.html',
  styleUrls: ['./backpack.component.scss'],
})
export class BackpackComponent implements OnInit {

  public candyItem: CandyI;
  public collectedCandy: CandyI[];
  public totalCandy: number;
  public candyId: string | number;

  constructor(
    private userStatsService: UserStatsService,
    private router: Router
  ) {
    this.totalCandy = 0;
  }

  ngOnInit() {
    // retrieve all candy items
    this.setBackpack();
  }

  public setBackpack() {
    this.userStatsService.getCurrentBackpackContent().subscribe(data => this.collectedCandy = data);
    console.log('COLLECTED CANDY RETRIEVED ON INIT: ', this.collectedCandy);
  }

  seeCandyInfos(id: string | number) {
    this.candyId = id;
    console.log('candy id= ', this.candyId);
    this.router.navigate(['play/candyDetails' + '/' + id]);
  }

}
