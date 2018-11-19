import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatIconModule,
  MatButtonModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule,
  MatDividerModule,
  MatProgressSpinnerModule,
  MatStepperModule,
} from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SelectorComponent } from './components/selector/selector.component';
import { DashboardEffects } from 'src/app/effects/dashboard/dashboard.effects';
import { RoutesComponent } from './components/routes/routes.component';
import { TicketModule } from '../ticket/ticket.module';
import * as fromDashboard from 'src/app/reducers/dashboard/dashboard.reducer';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    DashboardRoutingModule,
    TicketModule,
    EffectsModule.forFeature([DashboardEffects]),
    StoreModule.forFeature('dashboard', fromDashboard.reducer),
  ],
  declarations: [DashboardComponent, SelectorComponent, RoutesComponent]
})
export class DashboardModule { }
