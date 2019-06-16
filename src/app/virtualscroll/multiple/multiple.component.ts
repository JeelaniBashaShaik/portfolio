import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.css']
})
export class MultipleComponent implements OnInit {

  rows = [];
  rows1 = [];
  linkObj = {};
  constructor() { }

  ngOnInit() {
    this.generateItems();
    this.generateItems1();
  }

  generateItems() {
    for (let i = 1; i <= 10000; i++) {
      const obj = { title: 'title' + i, desc: 'this is sample desc no:' + i, link1: 'link' + i };
      this.rows.push(obj);
    }
  }

  generateItems1() {
    for (let i = 1; i <= 10000; i++) {
      const obj = { title: 'title' + i, desc: 'this is sample desc no:' + i, link1: 'link' + i };
      this.rows1.push(obj);
    }
  }

}
