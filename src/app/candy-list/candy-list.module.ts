import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CandyListComponent } from './candy-list.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        // ExploreContainerComponentModule,
        RouterModule.forChild([{ path: '', component: CandyListComponent }])
    ],
    declarations: [CandyListComponent]
})
export class Tab1PageModule { }