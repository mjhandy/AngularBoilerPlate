import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent} from './components/home-page/home-page.component';
import { BasicAccoridionComponent } from './components/basic-accoridion/basic-accoridion.component';
import { ResponsiveTable } from './components/responsive-table/responsive-table.component';
import { TabsComponent } from './components/material/tabs/tabs.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'basic-accordion', component: BasicAccoridionComponent},
  { path: 'response-table', component: ResponsiveTable},
  { path: 'material-tabs', component: TabsComponent}
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
