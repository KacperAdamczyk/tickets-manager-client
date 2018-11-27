import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersTicketsComponent } from './components/users-tickets/users-tickets.component';
import { AdminEffects } from '../../effects/admin/admin.effects';
import * as fromAdmin from '../../reducers/admin/admin.reducer';

@NgModule({
  declarations: [
    UsersTicketsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    EffectsModule.forFeature([AdminEffects]),
    StoreModule.forFeature('admin', fromAdmin.reducer)
  ]
})
export class AdminModule { }
