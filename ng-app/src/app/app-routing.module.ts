import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { NavItemComponent } from './nav-item/nav-item.component';

const routes: Routes = [
  {path: '',redirectTo: '/index',pathMatch: 'full'},
  {path: 'index',component: IndexComponent},
  {path: 'frontend', component: NavItemComponent},
  { path: '**', component: IndexComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRouterModule {}