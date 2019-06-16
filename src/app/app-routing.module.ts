import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsLandingComponent } from './news-landing/news-landing.component';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'home/datagrid', loadChildren: './datagrid/datagrid.module#DatagridModule' },
  { path: 'home/virtualscroll', loadChildren: './virtualscroll/virtualscroll.module#VirtualscrollModule'},
  { path: 'home/j', loadChildren: './j/j.module#JModule'},
  { path: 'home/news', component: NewsLandingComponent },
  { path: 'home/profile', component: ProfileComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
