import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoute } from "./dashboard.route";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(DashboardRoute)
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
