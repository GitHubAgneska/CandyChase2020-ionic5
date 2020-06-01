import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { HomeComponent } from './home/home.component';
import { AgeSelectComponent } from './age-select/age-select.component';

const routes: Routes = [

  { path: '', component: WelcomePageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'start', component: AgeSelectComponent },
  { path: 'static', loadChildren: () => import('./static-pages/static-pages.module').then(m => m.StaticPagesModule) },
  { path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },
  { path: '**', redirectTo: 'home'  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
