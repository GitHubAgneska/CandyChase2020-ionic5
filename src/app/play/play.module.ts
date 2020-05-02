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
import { CandyListComponent } from './candy-list/candy-list.component';
import { BackpackComponent } from './backpack/backpack.component';

@NgModule({
  declarations: [
    CandyListComponent,
    BackpackComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    SharedModule,
    FormsModule,
    PipesModule,
    RouterModule.forChild([{ path: 'candy', component: CandyListComponent }])
  ],
  providers : [
    KeyvaluePipe,
    RemoveUnderscorePipe,
    ShortenStringPipe,
    RemoveCharsPipe,
  ]
})
export class PlayModule { }
