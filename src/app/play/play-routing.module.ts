import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CandyListComponent } from '../play/candy-list/candy-list.component';
import { CandyDetailsComponent } from './candy-details/candy-details.component';
import { BackpackComponent } from '../play/backpack/backpack.component';
import { LevelComponent } from './level/level.component';
import { MapComponent } from './map/map.component';
import { AddressesComponent } from './addresses/addresses.component';
import { UserStatsComponent } from './user-stats/user-stats.component';

const playModuleRoutes: Routes = [

        { path: '', redirectTo: 'candyList'},
        { path: 'candyList', component: CandyListComponent },
        { path: 'user-stats', component: UserStatsComponent },
        { path: 'map', component: MapComponent },
        { path: 'addresses', component: AddressesComponent },
        { path: 'candyDetails/:id', component: CandyDetailsComponent },
        { path: 'backpack', component: BackpackComponent },
        { path: 'level', component: LevelComponent },
        //  {path: '404', component: NotFoundComponent},
        // { path: '**', redirectTo: '404' },
        { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forChild(playModuleRoutes)],
    exports: [RouterModule]
})
export class PlayRoutingModule { }
