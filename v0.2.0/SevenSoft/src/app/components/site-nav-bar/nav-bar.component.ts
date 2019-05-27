import { Component, OnInit } from '@angular/core';
//import * as $ from 'jquery';

declare const navBar: any

@Component({
  selector: 'site-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class SiteNavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    navBar()
  }
}
