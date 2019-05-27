import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
// import { AdmComponent } from './dashboard/adm/adm.component'
// import { UserListComponent } from './components/user-list/user-list.component';
// import { UserEditComponent } from './components/user-edit/user-edit.component';
// import { GraficoComponent } from './components/grafico/grafico.component';
// import { LoginComponent } from './components/login/login.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { AuthGuard } from './authentication/auth.guard';
// import { ConteudoComponent } from './components/conteudo/conteudo.component';
// import { FooterSiteComponent } from './components/footer-site/footer.component';
// import { UserProfileComponent } from './components/user-profile/user-profile.component';

import { HomeComponent } from './Site/home/home.component';
import { ObjetivoComponent } from './Site/objetivo/objetivo.component';
import { ServicosComponent } from './Site/servicos/servicos.component';
import { ProjetoComponent } from './Site/projeto/projeto.component';
import { ContatoComponent } from './Site/contato/contato.component';
import { CadastroComponent } from './Site/cadastro/cadastro.component';
import { LoginComponent } from './Site/login/login.component';
import { GuardService } from './Site/services/guard.service';
import { UserDashboardModule } from './dashboard/user-dashboard/user-dashboard.module';
import { EventoDashboardComponent } from './dashboard/user-dashboard/evento-dashboard/evento-dashboard.component';
import { ChamadosDashboardComponent } from './dashboard/user-dashboard/chamados-dashboard/chamados-dashboard.component';
import { Error404Module } from './Site/error404/error404.module';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'objetivo', component: ObjetivoComponent },
  { path: 'projeto', component: ProjetoComponent },
  { path: 'servicos', component: ServicosComponent },
  { path: 'contato', component: ContatoComponent, canActivate: [GuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'dashboard/:id', loadChildren: () => UserDashboardModule, canActivate: [GuardService] },
  { path: 'evento', component: EventoDashboardComponent },
  { path: 'abrir-chamado', component: ChamadosDashboardComponent },
  { path: '404', loadChildren: () => Error404Module },
  // { path: '**', redirectTo: '/404' },
]
// {
//   path: '',
//   component:ConteudoComponent,
//   pathMatch: 'full'
// },
// {
//   path:'',
//   redirectTo:'dashboard',
//   pathMatch:'full'
// },
// {
//   path: '',
//   component: AdmComponent,
//   children: [
//     {
//       path: '',
//       loadChildren: './dashboard/adm/adm.module#AdmModule',
//     }
//   ]
// },
// {
//   path: 'dashboard',
//   component: AdmComponent,
//   children: [
//     {
//       path: 'dashboard',
//       loadChildren: './dashboard/adm/adm.module#AdmModule',
//     }
//   ]
// },
// {
//   path: 'user-profile', 
//   component: UserProfileComponent,
// },

// {
//   path: 'chart',
//   component: GraficoComponent
// },
// {
//   path:'user-profile',
//   component:UserProfileComponent
// },
//   {
//     path: 'teste',
//     component: FooterSiteComponent
//   },
// ];

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
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
