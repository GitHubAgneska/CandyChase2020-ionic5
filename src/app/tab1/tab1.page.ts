import { Component, OnInit } from '@angular/core';
import { CandyApiService } from '../services/candy-api.service';
import { CandyI, CandyChecklistI } from '../../models/candy.interface';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor( private candyApiService: CandyApiService) {
  }
  public candyList: CandyI[];
  loading: boolean;

  ngOnInit() {
    this.loading = true;
    this.candyApiService.getAllCandyFromApi()
      .subscribe(
        (response: CandyI[]) => {
          this.candyList = response;
          console.log(this.candyList);
          this.loading = false;
        }
      );
  }

}
