import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { fadeAnimation } from './../../animations';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [fadeAnimation]
  
})
export class GridLandingComponent implements OnInit {

  currentUrl;
  breadcrumbs = [];
  constructor(private _router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    /* console.log(this._router.url);
    this.currentUrl = this._router.url;
    if(this.currentUrl != ''){
      let tempArray = this.currentUrl.split('/');
      console.log(tempArray,"temp Array");
      if(tempArray.length > 0){
        tempArray.map(item => {
          let route = {};
          if(item == ''){
            this.breadcrumbs.push({path:'home', name: 'Home'})
          }
          if(item == 'datagrid'){
            this.breadcrumbs.push({path:'datagrid', name: 'Data Grid'})
          }
          if(item == 'basic'){
            this.breadcrumbs.push({path:'basic', name: 'Basic'})
          }
          if(item == 'filterGrid'){
            this.breadcrumbs.push({path:'filterGrid', name: 'Filter Grid'})
          }
        })
      }
    } */
  }

}
