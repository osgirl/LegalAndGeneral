import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BlogpostComponent } from './components/blogpost/blogpost.component';
import { PlanningToolsComponent } from './components/planning-tools/planning-tools.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomePageComponent },
  { path: 'planning-tools', component: PlanningToolsComponent },
  { path: 'blogpost', component: BlogpostComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
