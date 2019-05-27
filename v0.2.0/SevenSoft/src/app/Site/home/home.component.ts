import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';


declare const rellax: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css',
    './animated.home.css'
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    rellax();
  }

}
