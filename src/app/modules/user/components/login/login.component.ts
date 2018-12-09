import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/reducers';
import { Login } from 'src/app/actions/user/user.actions';
import { UserService } from 'src/app/services/user/user.service';
import { filter, first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.isLoggedIn().pipe(
      first(),
      filter(isLoggedIn => isLoggedIn)
    ).subscribe(() => this.router.navigateByUrl('/'));
  }

  onSubmit(): void {
    const { email, password } = this.loginForm.value;

    this.store.dispatch(new Login({ email, password }));
  }

  get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }
}
