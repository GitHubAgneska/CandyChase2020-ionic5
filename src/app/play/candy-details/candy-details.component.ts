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

  public iconTrue = 'assets/icon/icon_true.png';
  public iconFalse = 'assets/icon/icon_false.png';
  public arrowDownImg = 'assets/icon/icon_arrowDown.png';

  public allergens: boolean;
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

    this.allergens = false;
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
    // console.log('activated route param= ', this.candyId);

    this.candyApiService.getCandyById(this.candyId)
    .subscribe( (response: Candy ) => {
      this.candyItem = {...response };

      // special check for 'gelatin' in the api's fr version of ingredients list
      // (for it is systematically missing in the en version in use)
      const containsGelatin = () => this.candyItem.ingredients_text_fr.includes('gélatine' || 'gelatine');
      // console.log('containsGelatin==', containsGelatin());

      // glutenFree check ----
      if (this.candyItem.allergens_hierarchy.length > 0)  {
        for ( const x of this.candyItem.allergens_hierarchy ) {
          if (x === 'gluten' || x === 'cereals'  || x === 'wheat') {
            this.candyChecklist.glutenFree = false;
          }
        }
      }
      // gelatin check : add to ingredients list en version ---
      if (containsGelatin()) {
        this.candyItem.ingredients_tags.push('gelatin');
      }

      // vegan / vegetarian check ---
      for (const x of this.candyItem.ingredients_tags ) {
        const animalProductsTerms = /dairy | milk | butter| eggs | honey/g;

        if ( x === 'gelatin' || (containsGelatin())) {
          if ( x.match(animalProductsTerms) ) {
            this.candyChecklist.vegan = false;
            }
          this.candyChecklist.vegetarian = false;
        } else { this.candyChecklist.vegetarian = true; }
      }
      // additives check ---
      if ( this.candyItem.additives_tags && this.candyItem.additives_tags.length > 0) {
        this.candyChecklist.additives = true;
      }
      // organic check ---
      if ( this.candyItem.labels !== ''  || this.candyItem.labels_hierarchy) {
        const terms = /bio | ab | biologique/g;
        if (this.candyItem.labels.match(terms) ) {
          console.log('BIO');
          this.candyChecklist.organic = true; }
      }
      // allergens check ---
      if (this.candyItem.allergens_hierarchy.length > 0) {
        this.allergens = true;
      }
    });
  }

  toggleIngredients() {
    this.showIngredients = !this.showIngredients;
  }

  toggleNutriscore() {
    this.showNutriscore = !this.showNutriscore;
  }

  toggleAllergens() {
    this.showAllergens = !this.showAllergens;
  }
}
