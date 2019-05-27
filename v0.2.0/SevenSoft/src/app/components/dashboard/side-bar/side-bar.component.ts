import { Component, OnInit } from '@angular/core';



declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string
}


export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: ''
  },
  {
    path: '/user-profile', title: 'Perfil', icon: 'person', class: '',
  },
  {
    path: '/user-evento', title: 'Evento', icon: 'person', class: ''
  },
  {
    path: '/user-ticket', title: 'Chamados', icon: 'person', class: ''
  },

];

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };

}
