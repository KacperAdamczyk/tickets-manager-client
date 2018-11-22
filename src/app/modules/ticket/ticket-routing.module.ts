import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogInGuard } from 'src/app/guards/log-in/log-in.guard';
import { UserTicketsComponent } from './components/user-tickets/user-tickets.component';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [LogInGuard],
    children: [
      { path: 'tickets', component: UserTicketsComponent },
      { path: 'tickets/:id', component: TicketDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketRoutingModule { }
