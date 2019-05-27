import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../side-bar-dashboard/side-bar-dashboard.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../Site/services/users.service';
import { User } from '../../../models/User';

@Component({
  selector: 'app-nav-bar-dashboard',
  templateUrl: './nav-bar-dashboard.component.html',
  styleUrls: ['./nav-bar-dashboard.component.css']
})

export class NavBarDashboardComponent implements OnInit {

  private listTitles: any[];
  location: Location;
  mobile_menu_visible: any = 0;
  private toggleButton: any;
  private sidebarVisible: boolean;
  isloggedIn: boolean;


  public user: User = {};


  constructor(private activatedRoute: ActivatedRoute,
    location: Location, private element: ElementRef,
    private router: Router, private userService: UsersService) {
    this.location = location;
    this.sidebarVisible = false;
  }

  ngOnInit() {
    this.getUser(this.user)
    console.log(this.user)
    this.isloggedIn = this.userService.isloggedIn();
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    this.router.events.subscribe((event) => {
      this.sidebarClose();
      var $layer: any = document.getElementsByClassName('close-layer')[0];
      if ($layer) {
        $layer.remove();
        this.mobile_menu_visible = 0;
      }
    });
  }

  logout() {
    this.userService.logout();
    // this.isloggedIn = false;
  }

  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const body = document.getElementsByTagName('body')[0];
    setTimeout(function () {
      toggleButton.classList.add('toggled');
    }, 500);

    body.classList.add('nav-open');

    this.sidebarVisible = true;
  };
  sidebarClose() {
    const body = document.getElementsByTagName('body')[0];
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    body.classList.remove('nav-open');
  };
  sidebarToggle() {
    // const toggleButton = this.toggleButton;
    // const body = document.getElementsByTagName('body')[0];
    var $toggle = document.getElementsByClassName('navbar-toggler')[0];

    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
    const body = document.getElementsByTagName('body')[0];

    if (this.mobile_menu_visible == 1) {
      // $('html').removeClass('nav-open');
      body.classList.remove('nav-open');
      if ($layer) {
        $layer.remove();
      }
      setTimeout(function () {
        $toggle.classList.remove('toggled');
      }, 400);

      this.mobile_menu_visible = 0;
    } else {
      setTimeout(function () {
        $toggle.classList.add('toggled');
      }, 430);

      var $layer = document.createElement('div');
      $layer.setAttribute('class', 'close-layer');


      if (body.querySelectorAll('.main-panel')) {
        document.getElementsByClassName('main-panel')[0].appendChild($layer);
      } else if (body.classList.contains('off-canvas-sidebar')) {
        document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
      }

      setTimeout(function () {
        $layer.classList.add('visible');
      }, 100);

      $layer.onclick = function () { //asign a function
        body.classList.remove('nav-open');
        this.mobile_menu_visible = 0;
        $layer.classList.remove('visible');
        setTimeout(function () {
          $layer.remove();
          $toggle.classList.remove('toggled');
        }, 400);
      }.bind(this);

      body.classList.add('nav-open');
      this.mobile_menu_visible = 1;

    }
  };

  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(2);
    }
    titlee = titlee.split('/').pop();

    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return 'Dashboard';
  }

  getUser(user: User) {
    const params = this.activatedRoute.snapshot.params;
    // console.log(this.user.userId)
    return this.userService.getUser(params.id).subscribe(
      (user) => {
        this.user = (user)
        // this.userService.getUser(user)
        // this.router.navigate(["/dashboard"])
        // this.router.navigate([this.returnUrl]);
        console.log(user)
      });
  }

  // this.userService.getUser(params.id).subscribe(
  //   res => {
  //     this.user = res;
  //     console.log(this.user)
  //   }
  // )

  // getUser() {
  //   // return this.userService.login().subscribe(
  //   //   (user) => {
  //   //     this.router.navigate(["/dashboard"])
  //   //     // this.router.navigate([this.returnUrl]);
  //   //     console.log(user)
  //   //   });
  //   const params = this.activatedRoute.snapshot.params;
  //   this.userService.getUser(this.user.userId).subscribe(
  //     res => {
  //       console.log(this.user.userId)
  //       console.log(res)
  //       this.user.map(result => result)
  //     },
  //     err => console.log(err)
  //   )
  // }
}
