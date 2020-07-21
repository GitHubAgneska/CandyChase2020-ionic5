import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CandyApiService } from '../services/candy-api.service';
import { FormControl } from '@angular/forms';
import { CandyI, CandyChecklistI } from '../../shared/models/candy.interface';
import { Candy, CandyChecklist } from '../../shared/models/candy.model';
import { ShortenStringPipe } from '../../shared/pipes/shorten-string/shorten-string';

import { UserStatsService } from '../../shared/services/user-stats.service';
import { LocalStorageService } from '../../shared/services/local-storage.service';

import { ToastController } from '@ionic/angular';
import { LoadingAnimationComponent } from '../../shared/loading-animation/loading-animation.component'


@Component({
  selector: 'app-candy-list',
  templateUrl: './candy-list.component.html',
  styleUrls: ['./candy-list.component.scss'],
})
export class CandyListComponent implements OnInit {

  // public loading: boolean;

  public candyList$: Observable<CandyI[]>;

  public candyList: CandyI[];

  public candyItem: CandyI;
  public candyChecklist: CandyChecklist;
  public itemsInBackpack: CandyI[];
  public totalCandy: number;

  public totalCandy$: Observable<number>;
  public totalPoints: number;
  // public plusBtnImg = 'src/assets/graphicmat/zoomIn.png';

  // path origin tracing
  public pathOrigin: string;

  // challenges notifications state tracing
  public newChallenge: boolean;
  public challengeState: string;
  public paramSubscription: Subscription;

  public searchTerm: string;
  public searchControl: FormControl;
  public searching: any = false;

  public anim = 'assets/graphicMat/loading.gif';

  constructor(
    private candyApiService: CandyApiService,
    public localStorageService: LocalStorageService,
    private userStatsService: UserStatsService,
    public shortenString: ShortenStringPipe,
    public toastController: ToastController,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ) {

    // this.candyList$ =  this.candyApiService.getAllCandyFromApi();
    this.candyList = [];
    this.candyItem = new Candy();
    this.candyChecklist = new CandyChecklist();
    this.itemsInBackpack = [];
    this.totalCandy = 0;
    this.totalPoints = 0;
    this.newChallenge = false;
    this.searchTerm = '';
    this.searchControl = new FormControl();
  }


  ngOnInit() {

    this.loadCandyListFromApi();

    /* this.retrievePathOrigin();
    if (!this.pathOrigin) {
      this.loadCandyListFromApi();
    } else if (this.pathOrigin === 'resumePlaying') {
      console.log('localStorage should activate');
      this.loadCandyListFromLocalStorage();
    } */
  }


// ----- tests for issue : userstats resetting because of play module reloading when going to menu (app module) and back

// test with localstorage :
// the api call should happen only once :
// when user opens the page for the first time ( = very first loading of play module )
// then candylist data gets cached in localstorage for potential subsequent play module exits
  public retrievePathOrigin(): any {
    this.activatedRoute.paramMap.subscribe( param => {
      this.pathOrigin = param.get('origin'); // = 'startPlaying' || 'resumePlaying'
    });
    return this.pathOrigin;
  }

  public loadCandyListFromApi() {
      this.candyList$ =  this.candyApiService.getAllCandyFromApi();
      // this.candyApiService.getAllCandyFromApi().subscribe(data => this.candyList = data );
      // this.localStorageService.setDataToStore(this.candyList);
  }

  public loadCandyListFromLocalStorage() {
    this.localStorageService.getStoredData();
  }
// ------------


// search ..........................................................
  public filterItems(searchTerm: string) {
    const searchbar = document.querySelector('ion-searchbar');
    searchbar.addEventListener('ionInput', this.handleInput);
  }

  public handleInput(event: any) {
    const elementsToFilter = Array.from(document.getElementsByClassName('candyList')as HTMLCollectionOf<HTMLElement>);
    const query = event.target.value.toLowerCase();
    requestAnimationFrame(() => {
      elementsToFilter.forEach(item => {
        const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
        item.style.display = shouldShow ? 'block' : 'none';
      });
    });
  }

  public onSearchInput() {
    this.searching = true;
    this.filterItems(this.searchTerm);
  }
// ..........................................................

  addCandyToBackpack(candyItem: CandyI) {
    this.totalCandy$ = this.userStatsService.getCurrentBackpackCount();

    this.candyItem = candyItem;
    this.candyItem.product_name = candyItem.product_name;
    this.candyItem._id = candyItem._id;
    // tslint:disable-next-line: no-bitwise
    this.candyItem.amountInBackpack = candyItem.amountInBackpack |  0;

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
    // if id does not exist : add new candy type to backpack (and increase amount)
    if (!added) {
      this.candyItem.amountInBackpack += 1;
      this.itemsInBackpack.push(this.candyItem);
    }
    // console.log('ITEMS : ', this.itemsInBackpack);
    // console.log(this.itemsInBackpack.forEach(item => console.log('AMOUNT==== ', item.amountInBackpack)));

    // save new total of all candy and points
    this.userStatsService.update_totalCandyCount(this.totalCandy += 1);
    this.userStatsService.update_totalPoints(this.totalPoints += 6);

    // save backpack new content
    this.userStatsService.update_backpackContent(this.itemsInBackpack);
    this.presentToastNewPoints();

  }

  async presentToastNewPoints() {
    const toast1 = await this.toastController.create({
      message: `+ 6 Points! ${name}`,
      position: 'middle',
      duration: 300,
      cssClass: 'new-points-toast',

    });
    const toast2 = await this.toastController.create({
      message: `TOTAL POINTS :` + this.totalPoints + `!`,
      position: 'middle',
      duration: 700,
      cssClass: 'new-totalpoints-toast'
    });
    toast1.present();

    setTimeout(() => {
        toast1.dismiss();
        toast2.present();
    }, 500);

    if (this.totalPoints % 30 === 0) {
      const toast3 = await this.toastController.create({
        position: 'middle',
        duration: 800,
        cssClass: 'levelUp-toast'
      });
      setTimeout(() => {
          toast2.dismiss();
          toast3.present();
      }, 500);
      this.newChallenge = true;
    }
  }

  public goToChallenges() {
    this.newChallenge = false;
    this.router.navigate(['play/trickOrTreat']);
  }

  ionViewWillLeave() {
  }


}


