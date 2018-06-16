import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {MainpageComponent} from "./mainpage/mainpage.component";

const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'courses', redirectTo: '/', pathMatch: 'full' },
  { path: 'natives', redirectTo: '/', pathMatch: 'full' },
  { path: 'settings', redirectTo: '/', pathMatch: 'full' },
  { path: 'course/:id', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
