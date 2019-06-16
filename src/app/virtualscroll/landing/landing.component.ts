import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from './../../animations';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [fadeAnimation]
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
