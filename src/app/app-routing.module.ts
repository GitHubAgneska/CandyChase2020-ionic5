import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path: '', component: WelcomePageComponent },
  { path: 'home', component: HomeComponent },

  { path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },

  { path: 'play', children: [
    { path: '', loadChildren: () =>
        import('./play/candy-list/candy-list.module').then(m => m.CandyListModule)
    }]},

  { path: 'static', loadChildren: () => import('./static-pages/static-pages.module').then(m => m.StaticPagesModule) },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
