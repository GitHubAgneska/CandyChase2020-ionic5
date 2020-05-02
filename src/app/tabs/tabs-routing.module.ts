import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { CandyListModule } from '../play/candy-list/candy-list.module';
import { PlayModule } from '../play/play.module';

const routes: Routes = [

  { path: 'tabs', component: TabsPage, children: [

      { path: 'tab1', children: [
          { path: '', loadChildren: () =>
              import('../play/tab1/tab1.module').then(m => m.Tab1PageModule)
          }]},

      { path: 'play', children: [
        { path: '', loadChildren: () =>
              import('../play/play.module').then(m => m.PlayModule )
          }]},

      { path: 'tab3', children: [
          { path: '', loadChildren: () =>
              import('../play/tab3/tab3.module').then(m => m.Tab3PageModule)
          }]},

      { path: '', redirectTo: '/tabs/tab1', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/tabs/tab1', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
