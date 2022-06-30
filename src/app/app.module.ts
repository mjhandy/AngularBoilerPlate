import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BasicAccoridionComponent } from './components/basic-accoridion/basic-accoridion.component';
import { WidgetComponent } from './components/widget/widget.component';
import { ResponsiveTable } from './components/responsive-table/responsive-table.component';
import { TabsComponent } from './components/material/tabs/tabs.component';

import { MaterialDesignModule } from './components/material-design/material-design.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SlickCarouselComponent } from './components/slick-carousel/slick-carousel/slick-carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainNavComponent,
    HomePageComponent,
    BasicAccoridionComponent,
    WidgetComponent,
    ResponsiveTable,
    TabsComponent,
    SlickCarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    BrowserAnimationsModule,
    MaterialDesignModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
