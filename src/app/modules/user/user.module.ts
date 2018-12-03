import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatProgressSpinnerModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';

import { UserEffects } from '../../effects/user/user.effects';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './components/login/login.component';
import { reducer as userReducer } from '../../reducers/user/user.reducer';
import { RegisterComponent } from './components/register/register.component';
import { ActivationComponent } from './components/activation/activation.component';
import { PasswordStrengthComponent } from './components/password-strength/password-strength.component';
import { UiModule } from '../ui/ui.module';
import { UserDetailsComponent } from './components/user-details/user-details.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatPasswordStrengthModule.forRoot(),
    UserRoutingModule,
    UiModule,
    StoreModule.forFeature('user', userReducer),
    EffectsModule.forFeature([UserEffects])
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ActivationComponent,
    PasswordStrengthComponent,
    UserDetailsComponent
  ],
  exports: [
    LoginComponent,
    UserDetailsComponent,
  ]
})
export class UserModule { }
