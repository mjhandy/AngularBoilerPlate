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
import { MatTabsComponent } from './components/mat-tabs/mat-tabs.component';



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
    MatTabsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
