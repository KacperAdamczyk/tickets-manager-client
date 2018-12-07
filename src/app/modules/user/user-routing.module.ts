import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ActivationComponent } from './components/activation/activation.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LogInGuard } from 'src/app/guards/log-in/log-in.guard';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'profile', component: UserProfileComponent, pathMatch: 'full', canActivate: [LogInGuard] },
  { path: 'change-password', component: ChangePasswordComponent, pathMatch: 'full', canActivate: [LogInGuard] },
  { path: 'activate/:token', component: ActivationComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
