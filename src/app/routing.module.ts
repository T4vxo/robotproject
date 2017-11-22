import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  //{ path: 'heroes', component: HeroesComponent }
];

@NgModule({
  exports: [ RouterModule ]
})
export class AppRouterModule { }
