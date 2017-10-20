import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { MatCardModule,
         MatButtonModule,
         MatFormFieldModule,
         MatInputModule
} from "@angular/material";
import { FormsModule } from "@angular/forms";


import { AuthComponent } from './auth/auth.component';
import { AuthRoute } from './auth.route';
import { AuthentificationService } from "./authentification.service";
import { AuthGuardService } from "./auth-guard.service";


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
  providers: [
    AuthentificationService,
    AuthGuardService,

  ],
  declarations: [AuthComponent]
})
export class AuthModule { }
