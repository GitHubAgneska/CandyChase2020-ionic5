import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { CandyApiService } from '../services/candy-api.service';
import { KeyvaluePipe } from 'src/app/shared/pipes/keyvalue/keyvalue';
import { ShortenStringPipe } from 'src/app/shared/pipes/shorten-string/shorten-string';
import { RemoveUnderscorePipe } from 'src/app/shared/pipes/remove-underscore/remove-underscore';
import { RemoveCharsPipe } from 'src/app/shared/pipes/remove-chars/remove-chars';
import { CandyI, CandyChecklistI } from 'src/app/shared/models/candy.interface';

@Component({
  selector: 'app-candy-details',
  templateUrl: './candy-details.component.html',
  styleUrls: ['./candy-details.component.scss'],
})
export class CandyDetailsComponent implements OnInit {

  public candyItem: CandyI;
  public candyId: string | number;

  public candyChecklist: CandyChecklistI;
  public additives: boolean;
  public preservatives: boolean;
  public organic: boolean;
  public glutenFree: boolean;
  public vegan: boolean;
  public vegetarian: boolean;

  public iconTrue = 'assets/icon/icon_true.png';
  public iconFalse = 'assets/icon/icon_false.png';

  public showIngredients: boolean;
  public showAllergens: boolean;
  public showNutriscore: boolean;
  public selected: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public candyApiService: CandyApiService,
    public keyvaluepipe: KeyvaluePipe,
    public removeUnderscore: RemoveUnderscorePipe,
    public removeChars: RemoveCharsPipe,
    public shortenStringPipe: ShortenStringPipe
  ) {
    this.candyId = this.navParams.get('idparam');
    this.candyItem = {
      _id: '', product_name: '', generic_name_fr: '',
      image_front_url: '', brands_tags: [], ingredients_tags: [],
      nutriscore_data: [], additives_tags: [], allergens_hierarchy: [], labels: ''
    };

    this.candyChecklist = {
      additives: false,
      preservatives: false,
      organic: false,
      glutenFree: false,
      vegan: false,
      vegetarian: false
    };

    this.showIngredients = false;
    this.showAllergens = false;
    this.showNutriscore = false;
  }

  ngOnInit() {

    this.candyApiService.getCandyById(this.candyId)
    .subscribe( (response: CandyI ) => {
      this.candyItem = response;
      // this.candyOfList = response;

      this.candyItem.product_name = response.product_name;
      this.candyItem.image_front_url = response.image_front_url;
      this.candyItem.ingredients_tags = response.ingredients_tags;
      this.candyItem.nutriscore_data = response.nutriscore_data;
      this.candyItem.allergens_hierarchy = response.allergens_hierarchy;
      this.candyItem.additives_tags = response.additives_tags;
      this.candyItem.labels = response.labels;

      console.log('candy response: ', response);

      for ( const x of this.candyItem.allergens_hierarchy ) {
        if (x === 'gluten' ) {
          this.candyChecklist.glutenFree = false;
          this.glutenFree = false;
        }
      }
     /*  ( x === 'milk' ||  x === 'butter' ||  x === 'eggs') */
      for (const x of this.candyItem.ingredients_tags ) {
        if ( x === 'milk'){
          this.vegan = false;
        }
        if ( x === 'gelatin'){
          this.vegetarian = false;
          this.vegan = false;
        } else { this.vegetarian = true; }
      }

      if ( this.candyItem.additives_tags && this.candyItem.additives_tags.length>0){
        this.additives = true;
      }

      if ( this.candyItem.labels && this.candyItem.labels.length > 0 ) {
        this.candyItem.labels.split(',').forEach(x => { if ( x === 'bio' ||  x === 'ab') {
          this.organic = true; }
        });
      }
    });
  }
  toggleIngredients() {
    this.showIngredients = !this.showIngredients;
    this.selected = !this.selected;
  }

  toggleAllergens() {
    this.showAllergens = !this.showAllergens;
  }

  toggleNutriscore() {
    this.showNutriscore = !this.showNutriscore;
  }

}
