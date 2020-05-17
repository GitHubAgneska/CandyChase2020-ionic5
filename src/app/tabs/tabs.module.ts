import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';
import { TabsPage } from './tabs.page';
import { SharedModule } from '../shared/shared.module';
// import { AgeSelectComponent } from '../play/age-select/age-select.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    SharedModule
  ],
  declarations: [TabsPage,
   //  AgeSelectComponent
  ],
})
export class TabsPageModule {}
