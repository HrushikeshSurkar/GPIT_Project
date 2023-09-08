import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { MainComponent } from './layout/main/main.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TopnavComponent } from './layout/topnav/topnav.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './modules/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material/material.module';
import { TextComponent } from './modules/main/text/text.component';
import { AudioComponent } from './modules/main/audio/audio.component';
import { ImagesComponent } from './modules/main/images/images.component';
import { VideosComponent } from './modules/main/videos/videos.component';
import { TagsComponent } from './modules/main/tags/tags.component';
import { ThumbnailsComponent } from './modules/main/thumbnails/thumbnails.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LayoutComponent,
    MainComponent,
    SidebarComponent,
    TopnavComponent,
    DashboardComponent,
    LoginComponent,
    TextComponent,
    AudioComponent,
    ImagesComponent,
    VideosComponent,
    TagsComponent,
    ThumbnailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
