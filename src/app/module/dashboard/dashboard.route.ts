import { Route } from '@angular/router';

import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthGuardService } from "../auth/auth-guard.service";

export const DashboardRoute: Route[] = [{
  component: DashboardComponent,
  path: 'dash',
  canActivate: [AuthGuardService]
}];
