import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';
import 'rxjs/add/operator/filter';
import { Router, NavigationEnd, NavigationStart, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import PerfectScrollbar from 'perfect-scrollbar';
import { UsersService } from 'src/app/Site/services/users.service';
import { User } from 'src/app/models/User';



@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})


export class UserDashboardComponent implements OnInit {
  private _router: Subscription;
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  public user: User = {};

  constructor(private userService: UsersService, private activatedRoute: ActivatedRoute, public location: Location, private router: Router) { }

  ngOnInit() {
    // this.getUser()
  }

  // getUser() {
  //   const params = this.activatedRoute.snapshot.params;
  //   this.userService.getUser(params.id).subscribe(
  //     res => {
  //       console.log(res)
  //       this.user = res
  //     },
  //     err => console.log(err)
  //   )
  // }
  // getUser() {
  //   const params = this.activatedRoute.snapshot.params;
  //   this.userService.getUsers().subscribe(
  //     res => {
  //       console.log(res)
  //       this.user = res
  //     },
  //     err => console.log(err)
  //   )
  // }

}
