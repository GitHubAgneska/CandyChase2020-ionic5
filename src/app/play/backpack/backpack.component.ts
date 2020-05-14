import { Component, OnInit } from '@angular/core';
import { BackpackService } from '../services/backpack.service';
import { CandyI, CandyChecklistI } from 'src/app/shared/models/candy.interface';


@Component({
  selector: 'app-backpack',
  templateUrl: './backpack.component.html',
  styleUrls: ['./backpack.component.scss'],
})
export class BackpackComponent implements OnInit {

  public candyItem: CandyI;
  public collectedCandy: CandyI[];

  constructor(
    private backpackService: BackpackService,

  ) { }

  ngOnInit() {
    // retrieve all candy items
    this.setBackpack();
  }

  public setBackpack() {
    this.backpackService.getCurrentBackpack().subscribe(data => this.collectedCandy = data);
    console.log('COLLECTED CANDY RETRIEVED ON INIT: ', this.collectedCandy);
  }

}
