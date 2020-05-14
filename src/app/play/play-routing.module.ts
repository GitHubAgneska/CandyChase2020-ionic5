import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AgeSelectComponent } from '../play/age-select/age-select.component';
import { CandyListComponent } from '../play/candy-list/candy-list.component';
import { CandyDetailsComponent } from './candy-details/candy-details.component';
import { BackpackComponent } from '../play/backpack/backpack.component';
import { LevelComponent } from './level/level.component';
import { CardsComponent } from './cards/cards.component';
import { MapComponent } from './map/map.component';
import { AddressesComponent } from './addresses/addresses.component';

const playModuleRoutes: Routes = [

   // { path: '', component: AgeSelectComponent, children: [
        // { path: '', redirectTo: '/candyList'},
        { path: '', component: CandyListComponent },
        { path: 'candyList', component: CandyListComponent },
        { path: 'map', component: MapComponent },
        { path: 'addresses', component: AddressesComponent },
            // candyList module not active atm
            // loadChildren: () => import('../play/candy-list/candy-list.module').then(m => m.CandyListModule) },
        { path: 'candyDetails/:id', component: CandyDetailsComponent },
        { path: 'backpack', component: BackpackComponent },
        { path: 'level', component: LevelComponent },
        { path: 'cards', component: CardsComponent }
    // ]}
];

@NgModule({
    imports: [RouterModule.forChild(playModuleRoutes)],
    exports: [RouterModule]
})
export class PlayRoutingModule { }
