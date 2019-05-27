import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { PerfilDashboardComponent } from './perfil-dashboard/perfil-dashboard.component';
import { GraficoDashboardComponent } from './grafico-dashboard/grafico-dashboard.component';
import { NavBarDashboardComponent } from './nav-bar-dashboard/nav-bar-dashboard.component';
import { SideBarDashboardComponent } from './side-bar-dashboard/side-bar-dashboard.component';
import { EventoDashboardComponent } from './evento-dashboard/evento-dashboard.component';
import { ChamadosDashboardComponent } from './chamados-dashboard/chamados-dashboard.component';
import { FooterDashboardComponent } from './footer-dashboard/footer-dashboard.component';

@NgModule({
  declarations: [
    UserDashboardComponent,
    PerfilDashboardComponent,
    GraficoDashboardComponent,
    NavBarDashboardComponent,
    SideBarDashboardComponent,
    EventoDashboardComponent,
    ChamadosDashboardComponent,
    FooterDashboardComponent
  ],
  exports: [UserDashboardComponent],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UserDashboardModule { }
