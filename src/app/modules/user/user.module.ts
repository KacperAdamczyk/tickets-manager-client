import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';

import { UserEffects } from '../../effects/user/user.effects';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './components/login/login.component';
import { reducer as userReducer } from '../../reducers/user/user.reducer';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatPasswordStrengthModule.forRoot(),
    UserRoutingModule,
    StoreModule.forFeature('user', userReducer),
    EffectsModule.forFeature([UserEffects])
  ],
  declarations: [LoginComponent, RegisterComponent],
  exports: [LoginComponent]
})
export class UserModule { }
