import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { PerfilDashboardComponent } from './perfil-dashboard/perfil-dashboard.component';

const routes: Routes = [
  { path: '', component: UserDashboardComponent },
  { path: 'perfil', component: PerfilDashboardComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
