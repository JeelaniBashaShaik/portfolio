import { Component, OnInit } from '@angular/core';
import { FetchService } from './../../fetch.service';
import * as moment from 'moment';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  gridCount = 0;
  scrollCount = 0;
  workingDaysLeftCount = 0;
  lookOutDaysLeftCount = 0;
  constructor(private _fetchService: FetchService) { }

  ngOnInit() {
    this.fetchGridData();
    this.fetchScrollData(); 
    this.workingDaysLeft();
    this.lookOutDaysLeft();
    
  }

  workingDaysLeft(){
    let includeWeekends = false;
   this.workingDaysLeftCount = this.daysLeft(2019,11,13, includeWeekends); 
  }

  lookOutDaysLeft() {
    let includeWeekends = true;
    this.lookOutDaysLeftCount = this.daysLeft(2019,11,13, includeWeekends);
  }

  weeksLeft = 0;
  daysLeft(futureYear, futureMonth, futureDay, includeWeekends){
    let today = new Date();
    let a = moment(`${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`, 'DD/MM/YYYY');
    let b = moment(`${futureDay}/${futureMonth}/${futureYear}`,'DD/MM/YYYY');
    let days = b.diff(a, 'days');
    this.weeksLeft = b.diff(a, 'weeks');
    /* if (includeWeekends) {
      return days * 7;
    } else {
      return days * 5;
    } */

    return days
  }

  fetchGridData() {
    let currentDate = new Date();
    this._fetchService.fetchNpmData(`https://api.npmjs.org/downloads/range/2018-04-01:${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}/@jb7/ngxdatagrid`).subscribe(data => {
      data.downloads.map(item => {
        this.gridCount += item['downloads'];
      })
    })
  }

  fetchScrollData() {
    let currentDate = new Date();
    this._fetchService.fetchNpmData(`https://api.npmjs.org/downloads/range/2018-04-01:${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}/@jb7/ngx-virtualscroll`).subscribe(data => {
      data.downloads.map(item => {
        this.scrollCount += item['downloads'];
      })
    })
  }

  findText(value) {
  console.log(value);
}

}


