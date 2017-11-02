import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { SideComponent } from './side/side.component';

/*  路由表  */

import { AppRouterModule } from './app-routing.module';

import { AppService } from './app.service'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    NavItemComponent,
    SideComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouterModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
