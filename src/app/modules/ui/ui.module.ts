import { NgModule } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { StatusComponent } from './components/status/status.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  declarations: [NavComponent, StatusComponent],
  exports: [
    NavComponent,
    StatusComponent
  ]
})
export class UiModule { }
