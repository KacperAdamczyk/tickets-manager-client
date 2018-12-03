import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersTicketsComponent } from './components/users-tickets/users-tickets.component';
import { AdminEffects } from '../../effects/admin/admin.effects';
import * as fromAdmin from '../../reducers/admin/admin.reducer';
import { MatFormFieldModule, MatAutocompleteModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { TicketModule } from '../ticket/ticket.module';

@NgModule({
  declarations: [
    UsersTicketsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    TicketModule,
    AdminRoutingModule,
    EffectsModule.forFeature([AdminEffects]),
    StoreModule.forFeature('admin', fromAdmin.reducer)
  ]
})
export class AdminModule { }
