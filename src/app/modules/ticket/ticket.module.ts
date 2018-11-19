import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { MatCardModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [TicketDetailsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    TicketRoutingModule
  ],
  exports: [TicketDetailsComponent]
})
export class TicketModule { }
