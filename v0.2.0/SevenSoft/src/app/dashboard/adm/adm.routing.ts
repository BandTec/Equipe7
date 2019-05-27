import { Routes } from '@angular/router';

import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';
import { TableListComponent } from '../../components/table-list/table-list.component';
import { AdmComponent } from './adm.component'


// import {  } from '../../components/dashboard/';


export const AdmRouting: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  // {
  //   path: 'user-profile', 
  //   component: UserProfileComponent,
  // },
  {
    path: 'user-evento', 
    component: TableListComponent
  },
  // {
  //   path: 'user-ticket', component: DashboardComponent
  // },
];
