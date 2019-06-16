import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  breadcrumbs = [];
  constructor(private _router: Router) {}
  title = 'app';

  rows=[
    {"userId": 256,"id": 1,"title": "delectus","completed": false},
    {"userId": 89,"id": 2,"title": "quis ut","completed": false},
    {"userId": 64,"id": 3,"title": "fugiat","completed": false},
    {"userId": 23,"id": 4,"title": "tempora","completed": true}
];

columns = [
    {name:"userId"},
    {name:"id"},
    {name:"title"},
    {name:"completed"}
];
  ngOnInit(){
    this._router.events.subscribe(event=>{
      if(event.constructor.name === "NavigationEnd"){
        let url = event['urlAfterRedirects'];
      let tempArray = url.split('/');
      tempArray.shift(); // remove first slash
      console.log(tempArray,"temp Array");
      if(tempArray.length > 0){
        this.breadcrumbs = [];
        tempArray.map(item => {
          let route = {};
          if(item == 'home'){
            this.breadcrumbs.push({path:'home', name: 'Home'})
          }
          if(item == 'templateRef'){
            this.breadcrumbs.push({path:'templateRef', name: 'Template Ref'})
          }
          if(item == 'datagrid'){
            this.breadcrumbs.push({path:'home/datagrid', name: 'Data Grid'})
          }
          if(item == 'virtualscroll'){
            this.breadcrumbs.push({path:'home/virtualscroll', name: 'Virtual Scroll'})
          }
          if(item == 'news'){
            this.breadcrumbs.push({path:'home/news', name: 'News'})
          }
          if(item == 'basic'){
            this.breadcrumbs.push({path:'basic', name: 'Basic'})
          }
          if(item == 'about'){
            this.breadcrumbs.push({path:'about', name: 'About'})
          }
          if(item == 'filterGrid'){
            this.breadcrumbs.push({path:'filterGrid', name: 'Filter'})
          }
          if(item == 'multiSelect'){
            this.breadcrumbs.push({path:'multiSelect', name: 'Multi Select'})
          }
          if(item == 'editable2'){
            this.breadcrumbs.push({path:'editable2', name: 'Editable'})
          }
          if(item == 'styled'){
            this.breadcrumbs.push({path:'styled', name: 'Styled'})
          }
          if(item == 'toolbar'){
            this.breadcrumbs.push({path:'toolbar', name: 'Toolbar'})
          }
          if(item == 'textAlign'){
            this.breadcrumbs.push({path:'textAlign', name: 'Text Align'})
          }
          if(item == 'pagination'){
            this.breadcrumbs.push({path:'pagination', name: 'Pagination'})
          }
          if(item == 'multiple'){
            this.breadcrumbs.push({path:'multiple', name: 'Multiple'})
          }
          if(item == 'profile'){
            this.breadcrumbs.push({path:'profile', name: 'Profile'})
          }
          if(item == 'dashboard'){
            this.breadcrumbs.push({path:'dashboard', name: 'Dashboard'})
          }
        })
      }
    } 
    })
  }
}
