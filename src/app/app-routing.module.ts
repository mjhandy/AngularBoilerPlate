import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BadgeModalComponent } from './components/badge-modal/badge-modal.component';

const routes: Routes = [
  { path: 'badge-modal', component: BadgeModalComponent }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
