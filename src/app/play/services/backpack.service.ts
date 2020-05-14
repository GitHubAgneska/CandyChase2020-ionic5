import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CandyI } from '../../shared/models/candy.interface';


@Injectable()
export class BackpackService {

    public itemsInBackpack: CandyI[];

    // keep track of backpack state --
    private backpack$ = new BehaviorSubject([]);

    // keep track of candy total --
    private totalCandyInBackpack$ = new BehaviorSubject(0);

    constructor() {
        this.itemsInBackpack = [];
    }

    public getCurrentBackpack() {
        return this.backpack$.asObservable();
    }

    public getCurrentBackpackCount() {
        return this.totalCandyInBackpack$.asObservable();
    }

    // method for components to update backpack
    public update_backpack(itemsInBackpack: CandyI[]) {
        this.backpack$.next(itemsInBackpack);
    }

    // method for components to update total candy
    public update_totalCandyCount(totalCandy: number) {
        this.totalCandyInBackpack$.next(totalCandy);
    }

}

