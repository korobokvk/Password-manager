import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router"

import { AuthComponent } from './auth/auth.component';
import { AuthRoute } from './auth.route'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(AuthRoute)
  ],
  declarations: [AuthComponent]
})
export class AuthModule { }
