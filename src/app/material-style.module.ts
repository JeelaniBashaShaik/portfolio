import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MzButtonModule, MzInputModule, MzNavbarModule,
   MzSelectModule, MzSwitchModule, MzCardModule,
    MzFeatureDiscoveryModule, MzTooltipModule,
    MzIconModule, MzIconMdiModule,MzModalModule,  MzSpinnerModule,MzToastModule, MzCollectionModule         } from 'ngx-materialize';

@NgModule({
  imports: [
    CommonModule,
    MzButtonModule,
    MzInputModule,
    MzNavbarModule,
    MzSelectModule,
    MzSwitchModule ,
    MzCardModule,
    MzFeatureDiscoveryModule,
    MzTooltipModule,
    MzSpinnerModule, 
    MzIconModule,
    MzIconMdiModule,
    MzToastModule,
    MzCollectionModule,
    MzModalModule 
  ],
  declarations: [],
  exports: [
    MzButtonModule,
    MzInputModule,
    MzNavbarModule,
    MzSelectModule,
    MzSwitchModule,
    MzCardModule,
    MzFeatureDiscoveryModule,
    MzTooltipModule,
    MzSpinnerModule,
    MzIconModule,
    MzIconMdiModule,
    MzToastModule,
    MzCollectionModule,
    MzModalModule 
  ]
})
export class MaterialStyleModule { }
