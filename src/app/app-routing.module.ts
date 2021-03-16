import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent} from './components/home-page/home-page.component';
import { BadgeModalComponent } from './components/badge-modal/badge-modal.component';
import { BasicAccoridionComponent } from './components/basic-accoridion/basic-accoridion.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'badge-modal', component: BadgeModalComponent },
  { path: 'basic-accordion', component: BasicAccoridionComponent}
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
