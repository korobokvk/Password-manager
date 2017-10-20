import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { MatCardModule } from "@angular/material";
import { MatButtonModule } from "@angular/material"

import { MainComponent } from './main/main.component';
import { MainRoute } from "./main.route";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(MainRoute),
    MatCardModule,
    MatButtonModule
  ],
  declarations: [MainComponent]
})
export class MainModule { }
