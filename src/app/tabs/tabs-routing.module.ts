import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';


const routes: Routes = [

  { path: 'play', component: TabsPage, children: [

      { path: '', children: [

        { path: '',  loadChildren: () => import('../play/play.module').then(m => m.PlayModule)
      }]},
/*       { path: 'tab1', children: [
          { path: '', loadChildren: () =>
              import('../play/tab1/tab1.module').then(m => m.Tab1PageModule)
          }]}, */
      // { path: '', redirectTo: '/tabs/tab1', pathMatch: 'full' },
  ]}
  // { path: '', redirectTo: '/tabs/tab1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
