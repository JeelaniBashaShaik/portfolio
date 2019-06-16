import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MaterialStyleModule } from './material-style.module';
import { AppRoutingModule } from './app-routing.module';
import { DatagridModule } from './datagrid/datagrid.module';
import { VirtualscrollModule } from './virtualscroll/virtualscroll.module';
import { JModule } from './j/j.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgxDataGridModule } from '@jb7/ngxdatagrid';
import { NewsComponent } from './news/news.component';
import { NewsLandingComponent } from './news-landing/news-landing.component';
import { FetchService } from './fetch.service';
import { ProfileComponent } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    NewsLandingComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
/*     DatagridModule,
    VirtualscrollModule, */
    MaterialStyleModule,
    AppRoutingModule,
    NgxDataGridModule,
    HttpClientModule,
    FormsModule,
    JModule,
    BrowserAnimationsModule
  ],
  providers: [FetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
