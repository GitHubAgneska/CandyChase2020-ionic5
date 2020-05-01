import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BackpackComponent } from './backpack.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        // ExploreContainerComponentModule,
        RouterModule.forChild([{ path: '', component: BackpackComponent }])
    ],
    declarations: [BackpackComponent]
})
export class BackpackModule { }
