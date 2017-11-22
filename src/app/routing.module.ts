import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { AppComponent } from './app.component';

//import { HeaderComponent } from './header/header.component';
import { BloggComponent } from './blogg/blogg.component';
import { ContactComponent } from './contact/contact.component';
import { MembersComponent } from './members/members.component';
import { StartComponent } from './start/start.component';
import { SponsorsComponent } from './sponsors/sponsors.component';

const routes: Routes = [
  { path: '', redirectTo:'home',pathMatch:'full' },
  { path: 'home', component: StartComponent },
  { path: 'blogg', component: BloggComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'members', component: MembersComponent },
  { path: 'sponsors', component: SponsorsComponent }
];
export const routingComponents =  [BloggComponent,ContactComponent,MembersComponent,StartComponent,SponsorsComponent];

@NgModule({
  exports: [ RouterModule ],
  imports:[
   RouterModule.forRoot(routes)
  ]
})
export class AppRouterModule { }
