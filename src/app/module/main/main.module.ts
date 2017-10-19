import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { MainComponent } from './main/main.component';
import { MainRoute } from "./main.route";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(MainRoute)
  ],
  declarations: [MainComponent]
})
export class MainModule { }
