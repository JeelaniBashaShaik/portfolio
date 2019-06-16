import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalLandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialStyleModule } from './../material-style.module';
import { JRoutingModule } from './j-routing/j-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialStyleModule,
    JRoutingModule
  ],
  declarations: [ PersonalLandingComponent,
    DashboardComponent
  ]
})
export class JModule { }
