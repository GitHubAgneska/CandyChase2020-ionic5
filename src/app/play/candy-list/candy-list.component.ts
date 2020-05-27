import { Component, OnInit } from '@angular/core';
import { CandyApiService } from '../services/candy-api.service';
import { CandyI, CandyChecklistI } from '../../shared/models/candy.interface';
import { ShortenStringPipe } from '../../shared/pipes/shorten-string/shorten-string';
import { Observable } from 'rxjs';

import { UserStatsService } from '../services/user-stats.service';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-candy-list',
  templateUrl: './candy-list.component.html',
  styleUrls: ['./candy-list.component.scss'],
})
export class CandyListComponent implements OnInit {

  constructor(
    private candyApiService: CandyApiService,
    private userStatsService: UserStatsService,
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

  public totalCandy$: Observable<number>;

  /* public plusBtnImg = './assets/graphicmat/zoomIn.png'; */

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

    this.totalCandy$ = this.userStatsService.getCurrentBackpackCount();

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
    this.userStatsService.update_totalCandyCount(this.totalCandy += 1);

    // save backpack new content
    this.userStatsService.update_backpackContent(this.itemsInBackpack);
    this.presentToastWithOptions();
  }

  async presentToastWithOptions() {
    const toast1 = await this.toastController.create({
      message: `+2 Points! ${name}`,
      position: 'middle',
      duration: 500,
      cssClass: 'custom-toast'
    });
    toast1.present();

    const toast2 = await this.toastController.create({
      message: `TOTAL POINTS :` + this.totalCandy + `!`,
      position: 'middle',
      duration: 400,
      cssClass: 'custom-toast'
    });
    // setTimeout();
    toast2.present();

    if (this.totalCandy % 5 === 0) {
      const toast3 = await this.toastController.create({
        position: 'middle',
        duration: 800,
        cssClass: 'levelUp'
      });
      toast3.present();
    }
  }
}
