import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersTicketsComponent } from './components/users-tickets/users-tickets.component';

const routes: Routes = [
  { path: '', redirectTo: 'tickets' },
  { path: 'tickets', component: UsersTicketsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
