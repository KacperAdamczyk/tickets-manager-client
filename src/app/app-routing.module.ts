import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminGuard } from './guards/admin/admin.guard';
import { LogInGuard } from './guards/log-in/log-in.guard';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'admin',
    loadChildren: './modules/admin/admin.module#AdminModule',
    canLoad: [ LogInGuard, AdminGuard ],
},
  // { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
