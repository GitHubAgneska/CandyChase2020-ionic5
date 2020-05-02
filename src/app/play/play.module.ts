import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { CandyListComponent } from './candy-list/candy-list.component';
import { BackpackComponent } from './backpack/backpack.component';



@NgModule({
  declarations: [
    CandyListComponent,
    BackpackComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PlayModule { }
