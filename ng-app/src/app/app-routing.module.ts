import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { NavItemComponent } from './nav-item/nav-item.component';

const routes: Routes = [
  {path: '',redirectTo: '/index',pathMatch: 'full'},
  {path: 'index',component: IndexComponent},
  {path: 'frontend', component: NavItemComponent},
  {path: 'native_dev', component: NavItemComponent},
  {path: 'start_up', component: NavItemComponent},
  {path: 'ux', component: NavItemComponent},
  {path: 'ui', component: NavItemComponent},
  {path: 'tech_fun', component: NavItemComponent},
  {path: 'app', component: NavItemComponent},
  {path: 'overseas', component: NavItemComponent},
  {path: 'article', component: NavItemComponent},
  { path: '**', component: IndexComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRouterModule {}