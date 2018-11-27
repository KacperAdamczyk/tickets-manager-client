import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminGuard } from './guards/admin/admin.guard';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'admin', loadChildren: './modules/admin/admin.module#AdminModule', canLoad: [ AdminGuard ] },
  // { path: '**', redirectTo: 'dashboard', pathMatch: 'full'  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
