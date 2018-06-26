import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PlanningTabComponent } from './components/shared/planning-tab/planning-tab.component';
import { SubmenuComponent } from './components/shared/header/submenu/submenu.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SocialButtonsComponent } from './components/shared/social-buttons/social-buttons.component';
import { PreviewBlockComponent } from './components/shared/preview-block/preview-block.component';
import { StepsBlockComponent } from './components/shared/steps-block/steps-block.component';
import { InfoBlockComponent } from './components/shared/info-block/info-block.component';
import { BlogpostComponent } from './components/blogpost/blogpost.component';
import { PlanningToolsComponent } from './components/planning-tools/planning-tools.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PlanningTabComponent,
    SubmenuComponent,
    HomePageComponent,
    SocialButtonsComponent,
    PreviewBlockComponent,
    StepsBlockComponent,
    InfoBlockComponent,
    BlogpostComponent,
    PlanningToolsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
