import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgeSelectComponent } from '../play/age-select/age-select.component';

import { CandyListComponent } from '../play/candy-list/candy-list.component';
import { BackpackComponent } from '../play/backpack/backpack.component';

const playModuleRoutes: Routes = [
    { path: 'play', component: AgeSelectComponent },
    { path: 'candyList', component: CandyListComponent },
    { path: 'play', component: BackpackComponent }


];

@NgModule({
    imports: [RouterModule.forChild(playModuleRoutes)],
    exports: [RouterModule]
})
export class StaticPagesRoutingModule { }