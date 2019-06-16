import { NgModule } from '@angular/core';
import { NgxVirtualScrollModule } from '@jb7/ngx-virtualscroll';
import { BasicComponent } from './basic/basic.component';
import { VirtualScrollRoutingModule } from './virtual-scroll-routing/virtual-scroll-routing.module';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { MultipleComponent } from './multiple/multiple.component';
import { StyledComponent } from './styled/styled.component';
import { MaterialStyleModule } from './../material-style.module';
@NgModule({
  imports: [
NgxVirtualScrollModule,
    VirtualScrollRoutingModule,MaterialStyleModule
  ],
  declarations: [BasicComponent, LandingComponent, AboutComponent, MultipleComponent, StyledComponent]
})
export class VirtualscrollModule { }
