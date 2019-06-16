import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './../landing/landing.component';
import { BasicComponent } from './../basic/basic.component';
import { MultipleComponent } from './../multiple/multiple.component';
import { StyledComponent } from './../styled/styled.component';
import { AboutComponent } from './../about/about.component';

const routes: Routes = [
  { path: 'home/virtualscroll', component: LandingComponent,
    children: [
      { path: '', component: AboutComponent},
      { path: 'about', component: AboutComponent },
      { path: 'basic', component: BasicComponent},
      { path: 'styled', component: StyledComponent },
      { path: 'multiple', component: MultipleComponent }
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VirtualScrollRoutingModule { }
