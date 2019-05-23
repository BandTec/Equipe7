import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ComponentsGraficoModule } from '../../grafico/components-grafico';
import { GraficoComponent } from '../../grafico/grafico.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { DashboardComponent } from '../../../components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    NavBarComponent,
    SideBarComponent,
    FooterComponent,
    DashboardComponent,
    GraficoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    SideBarComponent,
    FooterComponent,
    DashboardComponent,
    GraficoComponent
  ]
})
export class ComponentsDashboardModule { }
