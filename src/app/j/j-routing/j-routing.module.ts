import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalLandingComponent } from './../landing/landing.component';
import { DashboardComponent } from './../dashboard/dashboard.component';

const routes: Routes = [
  { path: 'home/j', component: PersonalLandingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JRoutingModule { }
