import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticPagesRoutingModule } from './static-pages-routing.module';
import { AboutComponent } from './about/about.component';
import { LegalComponent } from './legal/legal.component';
import { RulesComponent } from './rules/rules.component';

@NgModule({
  declarations: [
    // HomeComponent,
    AboutComponent,
    LegalComponent,
    RulesComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    StaticPagesRoutingModule
  ]
})
export class StaticPagesModule { }
