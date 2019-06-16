import { NgModule } from '@angular/core';
import { PersonalLandingComponent } from './landing/landing.component';
import { StudiesComponent } from './studies/studies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialStyleModule } from './../material-style.module';

import { PersonalRoutingModule } from './personal-routing.module';
//import { LinearRegressionComponent } from './linear-regression/linear-regression.component';

@NgModule({
  imports: [
    MaterialStyleModule,
    PersonalRoutingModule
  ],
  declarations: [PersonalLandingComponent, StudiesComponent, DashboardComponent]
})
export class PersonalModule { }
