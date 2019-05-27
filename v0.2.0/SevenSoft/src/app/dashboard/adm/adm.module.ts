import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdmRouting } from './adm.routing';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { TableListComponent } from '../../components/table-list/table-list.component';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdmRouting),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ]
})
export class AdmModule { }
