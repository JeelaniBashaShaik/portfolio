import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridLandingComponent } from './../landing/landing.component';
import { BasicComponent } from './../basic/basic.component';
import { TemplateRefExampleComponent } from './../templateRef/template-ref-example.component';
import { MultiSelectComponent } from './../multi-select/multi-select.component';
import { FilterGridComponent } from './../filter-grid/filter-grid.component';
import { VirtualScrollComponent } from './../virtual-scroll/virtual-scroll.component';
import { SingleSelectComponent } from './../single-select/single-select.component';
import { CustomWidthComponent } from './../custom-width/custom-width.component';
import { TextAlignComponent } from './../text-align/text-align.component';
import { ToolbarComponent } from './../toolbar/toolbar.component';
import { Editable1Component } from './../editable1/editable1.component';
import { PaginationComponent } from './../pagination/pagination.component';
import { PreSelectComponent } from './../pre-select/pre-select.component';
import { StyledComponent } from './../styled/styled.component';
import { AboutComponent } from './../about/about.component';

const routes: Routes = [
  { path: 'home/datagrid', component: GridLandingComponent,
    children: [
      { path: '', component: AboutComponent},
      { path: 'about', component: AboutComponent },
      { path: 'basic', component: BasicComponent},
      { path: 'templateRef', component:TemplateRefExampleComponent},
      { path: 'multiSelect', component:MultiSelectComponent},
      { path: 'filterGrid', component:FilterGridComponent},
      { path: 'virtualScroll', component:VirtualScrollComponent},
      { path: 'singleSelect', component:SingleSelectComponent },
      { path: 'customWidth', component:CustomWidthComponent },
      { path: 'textAlign', component:TextAlignComponent },
      { path: 'toolbar', component:ToolbarComponent },
      { path: 'editable2', component:Editable1Component },
      { path: 'pagination', component:PaginationComponent },
      { path: 'preselect', component: PreSelectComponent },
      { path: 'styled', component: StyledComponent }
    ] }
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatagridRoutingModule { }
