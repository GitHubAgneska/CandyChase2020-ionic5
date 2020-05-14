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
  public totalCandy: number;

  constructor(
    private backpackService: BackpackService,
  ) {
    this.totalCandy = 0;
  }

  ngOnInit() {
    // retrieve all candy items
    this.setBackpack();
  }

  public setBackpack() {
    this.backpackService.getCurrentBackpack().subscribe(data => this.collectedCandy = data);
    console.log('COLLECTED CANDY RETRIEVED ON INIT: ', this.collectedCandy);
  }

  seeCandyInfos(id: string | number) {
    // this.navCtrl.push(CandyDetailsPage, { idparam: id });
  }

}
