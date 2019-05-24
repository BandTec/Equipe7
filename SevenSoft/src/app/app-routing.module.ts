import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdmComponent } from './dashboard/adm/adm.component'


import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { GraficoComponent } from './components/grafico/grafico.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './authentication/auth.guard';
import { ConteudoComponent } from './components/conteudo/conteudo.component';
import { FooterSiteComponent } from './components/footer-site/footer.component';

const routes: Routes = [
  {
    path: '',
    component:ConteudoComponent,
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: AdmComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/adm/adm.module#AdmModule'
      }
    ]
  },
  {
    path: 'chart',
    component: GraficoComponent
  },
  {
    path: 'teste',
    component: FooterSiteComponent
  },
];

// {
//   path: 'homem', 
//   component: ConteudoComponent,
//   children: [
//     {
//       path: '',
//       pathMatch: 'full',
//       redirectTo: 'home'
//     };
//   ],
//     {
//       path: 'dashboard',
//       component: AdmComponent,
//       children: [
//         {
//           path: 'dashboard',
//           loadChildren: './dashboard/adm/adm.module#AdmModule'
//         }
//       ]
//     }

// {
//   path: '',
//   redirectTo: 'dashboard',
//   pathMatch: 'full'
// },
// {
//   path: '',
//   component: AdmComponent,
//   children: [
//     {
//       path: '',
//       loadChildren: './dashboard/adm/adm.module#AdmModule'
//     }
//   ]
// }
// {
//   path: '',
//   redirectTo: '/',
//   pathMatch: 'full'
// },
// {
//   path: 'user',
//   component: UserListComponent
// },
// {
//   path: 'user/add',
//   component: UserFormComponent
// },
// {
//   path: 'user/edit/:id',
//   component: UserEditComponent
// },

// {
//   path: 'login',
//   component: LoginComponent
// },
// {
//   path: 'dashboard',
//   component: DashboardComponent,
//   //canActivate:[AuthGuard]
// }



@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: []
})
export class AppRoutingModule { }
