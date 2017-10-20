import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { MatInputModule,
         MatFormFieldModule,
         MatButtonModule,
         MatExpansionModule,
         MatIconModule,

        } from "@angular/material";
import { FormsModule } from "@angular/forms"

import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoute } from "./dashboard.route";
import { AuthentificationService } from "../auth/authentification.service";
import { DataService } from "./data-set.service";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(DashboardRoute),
    MatButtonModule,
    MatInputModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule
  ],
  providers: [
    AuthentificationService,
    DataService,

  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
