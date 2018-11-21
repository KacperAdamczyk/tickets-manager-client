import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TicketRoutingModule } from './ticket-routing.module';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { MatCardModule, MatButtonModule, MatIconModule } from '@angular/material';
import { TicketDetailsInfoComponent } from './components/ticket-details-info/ticket-details-info.component';
import * as fromTicket from '../../reducers/ticket/ticket.reducer';
import { TicketEffects } from '../../effects/ticket/ticket.effects';
import { UserTicketsComponent } from './components/user-tickets/user-tickets.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { TicketListItemComponent } from './components/ticket-list-item/ticket-list-item.component';

@NgModule({
  declarations: [
    TicketDetailsComponent,
    TicketDetailsInfoComponent,
    UserTicketsComponent,
    TicketListComponent,
    TicketListItemComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    TicketRoutingModule,
    StoreModule.forFeature('ticket', fromTicket.reducer),
    EffectsModule.forFeature([TicketEffects])
  ],
  exports: [TicketDetailsComponent]
})
export class TicketModule { }
