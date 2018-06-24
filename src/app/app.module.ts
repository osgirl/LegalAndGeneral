import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PlanningToolsComponent } from './components/shared/planning-tools/planning-tools.component';
import { SubmenuComponent } from './components/shared/header/submenu/submenu.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SocialButtonsComponent } from './components/shared/social-buttons/social-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PlanningToolsComponent,
    SubmenuComponent,
    HomePageComponent,
    SocialButtonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
