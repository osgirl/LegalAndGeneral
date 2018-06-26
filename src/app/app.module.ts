import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PlanningToolsComponent } from './components/shared/planning-tools/planning-tools.component';
import { SubmenuComponent } from './components/shared/header/submenu/submenu.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SocialButtonsComponent } from './components/shared/social-buttons/social-buttons.component';
import { PreviewBlockComponent } from './components/shared/preview-block/preview-block.component';
import { StepsBlockComponent } from './components/shared/steps-block/steps-block.component';
import { InfoBlockComponent } from './components/shared/info-block/info-block.component';
import { AppRoutingModule } from './/app-routing.module';
import { BlogpostComponent } from './components/blogpost/blogpost.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PlanningToolsComponent,
    SubmenuComponent,
    HomePageComponent,
    SocialButtonsComponent,
    PreviewBlockComponent,
    StepsBlockComponent,
    InfoBlockComponent,
    BlogpostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
