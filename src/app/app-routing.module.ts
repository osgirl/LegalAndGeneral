import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home'},
  { path: 'home', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
];

@NgModule({
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
