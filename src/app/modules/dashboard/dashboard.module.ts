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
} from '@angular/material';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SelectorComponent } from './components/selector/selector.component';
import { EffectsModule } from '@ngrx/effects';

import { StoreModule } from '@ngrx/store';
import * as fromDashboard from 'src/app/reducers/dashboard/dashboard.reducer';
import { DashboardEffects } from 'src/app/effects/dashboard/dashboard.effects';
import { TripComponent } from './components/trip/trip.component';

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
    DashboardRoutingModule,
    EffectsModule.forFeature([DashboardEffects]),
    StoreModule.forFeature('dashboard', fromDashboard.reducer),
  ],
  declarations: [DashboardComponent, SelectorComponent, TripComponent]
})
export class DashboardModule { }
