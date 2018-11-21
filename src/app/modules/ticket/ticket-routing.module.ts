import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogInGuard } from 'src/app/guards/log-in/log-in.guard';
import { UserTicketsComponent } from './components/user-tickets/user-tickets.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [LogInGuard],
    children: [
      { path: 'tickets', component: UserTicketsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketRoutingModule { }
