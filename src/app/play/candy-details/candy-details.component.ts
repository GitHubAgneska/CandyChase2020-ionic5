import { Component, OnInit } from '@angular/core';
import { CandyApiService } from '../services/candy-api.service';
import { KeyvaluePipe } from '../../shared/pipes/keyvalue/keyvalue';
import { ShortenStringPipe } from '../../shared/pipes/shorten-string/shorten-string';
import { RemoveUnderscorePipe } from '../../shared/pipes/remove-underscore/remove-underscore';
import { RemoveCharsPipe } from '../../shared/pipes/remove-chars/remove-chars';
import { Candy, CandyChecklist } from '../../shared/models/candy.model';
import { CandyI, CandyChecklistI } from '../../shared/models/candy.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-candy-details',
  templateUrl: './candy-details.component.html',
  styleUrls: ['./candy-details.component.scss'],
})
export class CandyDetailsComponent implements OnInit {


  public candy: Candy;
  public candyItem: CandyI;
  public candyId: string | number;

  public candyChecklist: CandyChecklistI;
/*   public additives: boolean;
  public preservatives: boolean;
  public organic: boolean;
  public glutenFree: boolean;
  public vegan: boolean;
  public vegetarian: boolean; */

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

    this.candy = new Candy();
    this.candyItem = { ...this.candy };

    this.candyChecklist = new CandyChecklist();
    this.candyItem.candyChecklist = { ...this.candyChecklist};

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
    .subscribe( (response: Candy ) => {
      this.candyItem = {...response };
      this.candyItem.candyChecklist = {...this.candy.candyChecklist};

      console.log('candy response: ', response);
      console.log('candyItem = {...response} ', this.candyItem);

      for ( const x of this.candyItem.allergens_hierarchy ) {
        if (x === 'gluten' || x === 'cereals'  || x === 'wheat') {
          this.candyChecklist.glutenFree = false;
        }
      }
      for (const x of this.candyItem.ingredients_tags ) {
        if ( x === 'milk' ||  x === 'butter' ||  x === 'eggs') {
          this.candyChecklist.vegan = false;
        }
        if ( x === 'gelatin') {
          this.candyChecklist.vegetarian = false;
          this.candyChecklist.vegan = false;
        } else { this.candyChecklist.vegetarian = true; }
      }
      if ( this.candyItem.additives_tags && this.candyItem.additives_tags.length > 0) {
        this.candyChecklist.additives = true;
      }
      if ( this.candyItem.labels && this.candyItem.labels.length > 0 ) {
        this.candyItem.labels.split(',').forEach(x => { if ( x === 'bio' ||  x === 'ab') {
          this.candyChecklist.organic = true; }
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
