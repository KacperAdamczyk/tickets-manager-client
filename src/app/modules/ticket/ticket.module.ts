import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { QRCodeModule } from 'angularx-qrcode';

import { TicketRoutingModule } from './ticket-routing.module';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatDialogModule, MatProgressSpinnerModule } from '@angular/material';
import { TicketInfoComponent } from './components/ticket-info/ticket-info.component';
import * as fromTicket from '../../reducers/ticket/ticket.reducer';
import { TicketEffects } from '../../effects/ticket/ticket.effects';
import { UserTicketsComponent } from './components/user-tickets/user-tickets.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { TicketListItemComponent } from './components/ticket-list-item/ticket-list-item.component';
import { TicketSummaryComponent } from './components/ticket-summary/ticket-summary.component';
import { DeleteTicketModalComponent } from './components/delete-ticket-modal/delete-ticket-modal.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TicketDetailsComponent,
    TicketInfoComponent,
    UserTicketsComponent,
    TicketListComponent,
    TicketListItemComponent,
    TicketSummaryComponent,
    DeleteTicketModalComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    QRCodeModule,
    TicketRoutingModule,
    StoreModule.forFeature('ticket', fromTicket.reducer),
    EffectsModule.forFeature([TicketEffects])
  ],
  exports: [
    TicketSummaryComponent,
    TicketDetailsComponent
  ],
  entryComponents: [
    DeleteTicketModalComponent,
  ]
})
export class TicketModule { }
