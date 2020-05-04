import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CandyListComponent } from './candy-list.component';

// TODO : move that logic to higher module
import { PipesModule } from '../../shared/pipes/pipes.module';
import { KeyvaluePipe } from '../../shared/pipes/keyvalue/keyvalue';
import { RemoveUnderscorePipe } from '../../shared/pipes/remove-underscore/remove-underscore';
import { ShortenStringPipe } from '../../shared/pipes/shorten-string/shorten-string';
import { RemoveCharsPipe } from '../../shared/pipes/remove-chars/remove-chars';



@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        PipesModule,
        // ExploreContainerComponentModule,
        RouterModule.forChild([{ path: '', component: CandyListComponent }])
    ],
    declarations: [CandyListComponent],
    providers : [
        KeyvaluePipe,
        RemoveUnderscorePipe,
        ShortenStringPipe,
        RemoveCharsPipe,
    ]
})
export class CandyListModule { }
