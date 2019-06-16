import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MzToastService } from 'ngx-materialize';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  query;
  constructor(private _router: Router, private toastService: MzToastService) { }

  ngOnInit() {
  }

  findText() {
    if(this.query == '@Rehana7'){
      this._router.navigateByUrl('home/dashboard');
    } else {
      this.toastService.show('Incorrect Password',2000);
    }
  }
}
