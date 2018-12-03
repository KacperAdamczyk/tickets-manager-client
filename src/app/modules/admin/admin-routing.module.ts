import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersTicketsComponent } from './components/users-tickets/users-tickets.component';
import { TicketDetailsComponent } from '../ticket/components/ticket-details/ticket-details.component';

const routes: Routes = [
  {
    path: '',
    component: UsersTicketsComponent,
    pathMatch: 'full',
    data: {
      admin: true,
    }
  },
  {
    path: ':id',
    component: TicketDetailsComponent, pathMatch:
    'full',
    data: {
      admin: true,
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
