import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';

import { AppState } from 'src/app/reducers';
import { ValidateToken, ResetPassword } from 'src/app/actions/user/user.actions';
import { matchingPasswordsValidator } from 'src/app/validators/matching-passwords.validator';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  user$ = this.store.pipe(select('user'));
  isPasswordValid = false;

  resetPasswordForm = this.fb.group(
    {
      password: ['', Validators.required],
      passwordRepeat: ['', Validators.required],
    },
    {
      validator: matchingPasswordsValidator,
    }
  );

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    const token = this.route.snapshot.params.token;

    this.store.dispatch(new ValidateToken({ token, purpose: 'passwordReset' }));
  }

  onSubmit(): void {
    const token = this.route.snapshot.params.token;
    const { password } = this.resetPasswordForm.value;

    this.store.dispatch(new ResetPassword({
      token,
      credentials: {
        password,
      },
    }));
  }

  get password(): FormControl {
    return this.resetPasswordForm.get('password') as FormControl;
  }

  get passwordRepeat(): FormControl {
    return this.resetPasswordForm.get('passwordRepeat') as FormControl;
  }

}
