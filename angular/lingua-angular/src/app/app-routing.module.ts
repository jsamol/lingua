import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {MainpageComponent} from "./mainpage/mainpage.component";
import {NotImplementedComponent} from "./not-implemented/not-implemented.component";

const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'courses', component: NotImplementedComponent },
  { path: 'natives', component: NotImplementedComponent },
  { path: 'settings', component: NotImplementedComponent },
  { path: 'courses/:id', component: NotImplementedComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
