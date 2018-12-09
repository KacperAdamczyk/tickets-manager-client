import { Component } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/reducers';
import { matchingPasswordsValidator } from 'src/app/validators/matching-passwords.validator';
import { ChangePassword } from 'src/app/actions/user/user.actions';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  isPasswordValid = false;

  changePasswordForm = this.fb.group(
    {
      oldPassword: ['', Validators.required],
      password: ['', Validators.required],
      passwordRepeat: ['', Validators.required],
    },
    {
      validator: matchingPasswordsValidator,
    }
  );

  constructor(private fb: FormBuilder, private store: Store<AppState>) { }

  onSubmit(): void {
    const { passwordRepeat, ...passwords } = this.changePasswordForm.value;

    this.store.dispatch(new ChangePassword(passwords));
  }

  get oldPassword(): FormControl {
    return this.changePasswordForm.get('oldPassword') as FormControl;
  }

  get password(): FormControl {
    return this.changePasswordForm.get('password') as FormControl;
  }

  get passwordRepeat(): FormControl {
    return this.changePasswordForm.get('passwordRepeat') as FormControl;
  }
}
