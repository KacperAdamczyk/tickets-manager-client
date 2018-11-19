import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogInGuard } from 'src/app/guards/log-in/log-in.guard';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [LogInGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
