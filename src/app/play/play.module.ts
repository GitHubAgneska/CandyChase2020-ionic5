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
import { MapComponent } from './map/map.component';
import { UserStatsComponent } from './user-stats/user-stats.component';

import { LevelApiService } from './services/level-api.service';
import { TrickOrTreatComponent } from './trick-or-treat/trick-or-treat.component';
import { ChallengesComponent } from './challenges/challenges.component';


@NgModule({
  declarations: [
    // AgeSelectComponent,
    CandyListComponent,
    CandyDetailsComponent,
    BackpackComponent,
    AddressesComponent,
    MapComponent,
    UserStatsComponent,
    TrickOrTreatComponent,
    ChallengesComponent

  ],
  imports: [
    IonicModule,
    CommonModule,
    PlayRoutingModule,
    SharedModule,
    FormsModule,
    PipesModule

  ],
  providers : [
    KeyvaluePipe,
    RemoveUnderscorePipe,
    ShortenStringPipe,
    RemoveCharsPipe,
    LevelApiService
  ]
})
export class PlayModule { }
