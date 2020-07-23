import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CandyApiService } from '../services/candy-api.service';
import { FormControl } from '@angular/forms';
import { CandyI, CandyChecklistI } from '../../shared/models/candy.interface';
import { Candy, CandyChecklist } from '../../shared/models/candy.model';
import { ShortenStringPipe } from '../../shared/pipes/shorten-string/shorten-string';

import { UserStatsService } from '../../shared/services/user-stats.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-candy-list',
  templateUrl: './candy-list.component.html',
  styleUrls: ['./candy-list.component.scss'],
})
export class CandyListComponent implements OnInit {

  public candyList$: Observable<CandyI[]>;

  public candyItem: CandyI;
  public candyChecklist: CandyChecklist;
  public itemsInBackpack: CandyI[];
  public totalCandy: number;

  public totalCandy$: Observable<number>;
  public totalPoints: number;

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
    private userStatsService: UserStatsService,
    public shortenString: ShortenStringPipe,
    public toastController: ToastController,
    private router: Router
    ) {

    this.candyList$ =  this.candyApiService.getAllCandyFromApi();
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

    this.userStatsService.getCurrentBackpackContent().subscribe(data => this.itemsInBackpack = data);
    // console.log('backpack at init=', this.itemsInBackpack);
    this.userStatsService.getCurrentBackpackCount().subscribe(data => this.totalCandy = data);
    // console.log('totalCandy at init=', this.totalCandy);
    this.userStatsService.getCurrentTotalPoints().subscribe(data => this.totalPoints = data);
    // console.log('totalPoints at init=', this.totalPoints);
  }


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

  seeCandyInfos(id: string | number) {
    this.candyItem._id = id;
    console.log('candy id= ', this.candyItem._id);
    this.router.navigate(['play/candyDetails' + '/' + id]);
  }
  

  addCandyToBackpack(candyItem: CandyI) {

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

    if (this.totalCandy % 7 === 0) {
      this.newChallenge = true;
      this.presentToastWithOptions('New challenge!');
    }

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
    }
  }

  async presentToastWithOptions(message: string) {
    const toast = await this.toastController.create({
      message: `${ message }`,
      position: 'bottom',
      duration: 1500,
      cssClass: 'newChallengeToast'
    });
    toast.present();
  }

  public goToChallenges() {
    this.newChallenge = false;
    this.router.navigate(['play/trickOrTreat']);
  }

}


