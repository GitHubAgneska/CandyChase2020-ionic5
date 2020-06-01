import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';


const tabsRoutes: Routes = [

  { path: 'home', redirectTo: '/home' },

  { path: 'play', component: TabsPage, children: [

      { path: '', children: [

        { path: '',  loadChildren: () => import('../play/play.module').then(m => m.PlayModule)
      }]},

      // { path: '', redirectTo: '/tabs/tab1', pathMatch: 'full' },
  ]},
      // { path: '**', component:   }
];

@NgModule({
  imports: [RouterModule.forChild(tabsRoutes) ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
