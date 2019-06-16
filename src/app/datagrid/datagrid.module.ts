import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialStyleModule } from './../material-style.module';
import { NgxDataGridModule } from '@jb7/ngxdatagrid';
import { BasicComponent } from './basic/basic.component';
import { TemplateRefExampleComponent } from './templateRef/template-ref-example.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { DraggableComponent } from './draggable/draggable.component';
import { EditableComponent } from './editable/editable.component';
import { FilterGridComponent } from './filter-grid/filter-grid.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { SingleSelectComponent } from './single-select/single-select.component';
import { CustomWidthComponent } from './custom-width/custom-width.component';
import { TextAlignComponent } from './text-align/text-align.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { Editable1Component } from './editable1/editable1.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PreSelectComponent } from './pre-select/pre-select.component';
import { StyledComponent } from './styled/styled.component';
import { DatagridRoutingModule } from './datagrid-routing/datagrid-routing.module';
import { GridLandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CommonModule,NgxDataGridModule,FormsModule,
    DatagridRoutingModule,MaterialStyleModule
  ],
  declarations: [
    BasicComponent,
    TemplateRefExampleComponent,
    MultiSelectComponent,
    DraggableComponent,
    EditableComponent,
    FilterGridComponent,
    VirtualScrollComponent,
    SingleSelectComponent,
    CustomWidthComponent,
    TextAlignComponent,
    ToolbarComponent,
    Editable1Component,
    PaginationComponent,
    PreSelectComponent,
    StyledComponent,
    GridLandingComponent,
    AboutComponent
  ]
})
export class DatagridModule { }
