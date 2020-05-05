import { Component, OnInit } from '@angular/core';
import { CandyApiService } from '../services/candy-api.service';
import { CandyI, CandyChecklistI } from '../../shared/models/candy.interface';
import { ShortenStringPipe } from 'src/app/shared/pipes/shorten-string/shorten-string';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-candy-list',
  templateUrl: './candy-list.component.html',
  styleUrls: ['./candy-list.component.scss'],
})
export class CandyListComponent implements OnInit {

  constructor(
    private candyApiService: CandyApiService,
    public shortenString: ShortenStringPipe ) {

      this.candyList = [];
      this.candyItem = { _id: '', product_name: '', amountInBackpack: 0,
      image_front_url: '', brands_tags: [], ingredients_tags: [],
      nutriscore_data: [], additives_tags: [], allergens_hierarchy: [] };

      this.candyChecklist = { additives: false,
                            preservatives: false,
                            organic: false,
                            glutenFree: false,
                            vegan: false,
                            vegetarian: false };
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

  }
}
