import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

declare const navBar: any


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private userService: UsersService) { }

  ngOnInit() {
    navBar()
  }


}

