import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LegalComponent } from './legal/legal.component';
import { RulesComponent } from './rules/rules.component';

const staticPagesRoutes: Routes = [

    { path: 'about', component: AboutComponent },
    { path: 'legal', component: LegalComponent },
    { path: 'rules', component: RulesComponent },

];

@NgModule({
    imports: [RouterModule.forChild(staticPagesRoutes)],
    exports: [RouterModule]
})
export class StaticPagesRoutingModule { }
