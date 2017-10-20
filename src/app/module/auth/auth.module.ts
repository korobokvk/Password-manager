import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { MatCardModule } from "@angular/material";
import { MatButtonModule } from "@angular/material";
import { MatFormFieldModule } from "@angular/material";
import { MatInputModule } from "@angular/material";
import { FormsModule }   from '@angular/forms';

import { AuthComponent } from './auth/auth.component';
import { AuthRoute } from './auth.route';
import { AuthentificationService } from "./authentification.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(AuthRoute),
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule

  ],
  providers: [AuthentificationService],
  declarations: [AuthComponent]
})
export class AuthModule { }
