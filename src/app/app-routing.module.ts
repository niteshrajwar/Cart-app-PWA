import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import { CartComponent } from './cart/cart.component';
const routes: Routes = [
 //{ path: '', redirectTo: ' ', pathMatch: 'full'},
  // { path: 'app', component: AppComponent },
   { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
