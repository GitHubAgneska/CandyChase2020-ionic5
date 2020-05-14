import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { PipesModule } from '../shared/pipes/pipes.module';
import { KeyvaluePipe } from '../shared/pipes/keyvalue/keyvalue';
import { RemoveUnderscorePipe } from '../shared/pipes/remove-underscore/remove-underscore';
import { ShortenStringPipe } from '../shared/pipes/shorten-string/shorten-string';
import { RemoveCharsPipe } from '../shared/pipes/remove-chars/remove-chars';

import { PlayRoutingModule } from './play-routing.module';
import { CandyListComponent } from './candy-list/candy-list.component';
import { CandyDetailsComponent } from './candy-details/candy-details.component';
import { BackpackComponent } from './backpack/backpack.component';
import { AddressesComponent } from './addresses/addresses.component';
import { CardsComponent } from './cards/cards.component';
import { LevelComponent } from './level/level.component';
import { MapComponent } from './map/map.component';
import { BackpackService } from './services/backpack.service';
// import { AgeSelectComponent } from './age-select/age-select.component';


@NgModule({
  declarations: [
    // AgeSelectComponent,
    CandyListComponent,
    CandyDetailsComponent,
    BackpackComponent,
    AddressesComponent,
    CardsComponent,
    LevelComponent,
    MapComponent

  ],
  imports: [
    IonicModule,
    CommonModule,
    PlayRoutingModule,
    SharedModule,
    FormsModule,
    PipesModule,

  ],
  providers : [
    KeyvaluePipe,
    RemoveUnderscorePipe,
    ShortenStringPipe,
    RemoveCharsPipe,
    BackpackService
  ]
})
export class PlayModule { }
