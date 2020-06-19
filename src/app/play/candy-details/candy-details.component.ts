import { Component, OnInit } from '@angular/core';
import { CandyApiService } from '../services/candy-api.service';
import { KeyvaluePipe } from '../../shared/pipes/keyvalue/keyvalue';
import { ShortenStringPipe } from '../../shared/pipes/shorten-string/shorten-string';
import { RemoveUnderscorePipe } from '../../shared/pipes/remove-underscore/remove-underscore';
import { RemoveCharsPipe } from '../../shared/pipes/remove-chars/remove-chars';
import { CandyI, CandyChecklistI } from '../../shared/models/candy.interface';
import { ActivatedRoute } from '@angular/router';

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

  public noKnownAllergen: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    public candyApiService: CandyApiService,
    public keyvaluepipe: KeyvaluePipe,
    public removeUnderscore: RemoveUnderscorePipe,
    public removeChars: RemoveCharsPipe,
    public shortenString: ShortenStringPipe
  ) {
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
    this.showNutriscore = false;
    this.showAllergens = false;
    this.noKnownAllergen = false;
  }

  ngOnInit() {
    this.displayCandyInfo(this.candyId);
  }


  public displayCandyInfo(candyId: string | number)  {

    this.activatedRoute.paramMap.subscribe(param => {
      this.candyId = param.get('id');
    });
    console.log('activated route param= ', this.candyId);

    this.candyApiService.getCandyById(this.candyId)
    .subscribe( (response: CandyI ) => {
      this.candyItem = response;

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
        if ( x === 'milk') {
          this.vegan = false;
        }
        if ( x === 'gelatin') {
          this.vegetarian = false;
          this.vegan = false;
        } else { this.vegetarian = true; }
      }

      if ( this.candyItem.additives_tags && this.candyItem.additives_tags.length > 0) {
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

  toggleNutriscore() {
    this.showNutriscore = !this.showNutriscore;
  }

  toggleAllergens() {
    this.showAllergens = !this.showAllergens;
  }
}
