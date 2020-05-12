import { Component, OnInit } from '@angular/core';
import { CandyApiService } from '../services/candy-api.service';
import { CandyI, CandyChecklistI } from '../../shared/models/candy.interface';
import { ShortenStringPipe } from 'src/app/shared/pipes/shorten-string/shorten-string';
import { Observable } from 'rxjs';

import { BackpackService } from '../services/backpack.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-candy-list',
  templateUrl: './candy-list.component.html',
  styleUrls: ['./candy-list.component.scss'],
})
export class CandyListComponent implements OnInit {

  constructor(
    private candyApiService: CandyApiService,
    private backpackService: BackpackService,
    public shortenString: ShortenStringPipe,
    public toastController: ToastController) {

    this.candyList = [];
    this.candyItem = {
      _id: '', product_name: '', amountInBackpack: 0,
      image_front_url: '', brands_tags: [], ingredients_tags: [],
      nutriscore_data: [], additives_tags: [], allergens_hierarchy: []
    };

    this.candyChecklist = {
      additives: false,
      preservatives: false,
      organic: false,
      glutenFree: false,
      vegan: false,
      vegetarian: false
    };
    this.itemsInBackpack = [];
    this.totalCandy = 0;
  }

  loading: boolean;
  public candyList: CandyI[];
  public candyItem: CandyI;
  public candyChecklist: CandyChecklistI;
  public itemsInBackpack: CandyI[];
  public totalCandy: number;

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
  addCandyToBackpack(candyItem: CandyI) {

    this.backpackService.currentBackpackCount.subscribe(data => this.totalCandy = data);

    this.candyItem = candyItem;
    this.candyItem.product_name = candyItem.product_name;
    this.candyItem._id = candyItem._id;
    this.candyItem.amountInBackpack = candyItem.amountInBackpack;
    // this.candyItem.amountInBackpack = candyItem.amountInBackpack | 0;

    // new candy has not been added yet
    let added = false;
    // look into items of backpack if new candy id already exists
    for (const item of this.itemsInBackpack) {
      // if id exists : only increase amount of this candy
      if (item.product_name === this.candyItem.product_name) {
        item.amountInBackpack += 1;
        added = true;
        break;
      }
    }
    // if id does not exist : add new candy to backpack (and increase amount)
    if (!added) {
      this.candyItem.amountInBackpack += 1;
      this.itemsInBackpack.push(this.candyItem);
    }
    // console.log("ITEMS : ", this.itemsInBackpack);
    // console.log(this.itemsInBackpack.forEach(item => console.log(item.amountInBackpack)));

    // save new total of all candy
    this.backpackService.update_totalCandyCount(this.totalCandy += 1);
    // save backpack new state
    this.backpackService.update_backpack(this.itemsInBackpack);

  }
}
