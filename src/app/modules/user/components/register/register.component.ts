import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/reducers';
import { Register } from 'src/app/actions/user/user.actions';
import { MatPasswordStrengthComponent } from '@angular-material-extensions/password-strength';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  @ViewChild(MatPasswordStrengthComponent)
  private passwordStrength: MatPasswordStrengthComponent;

  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    passwordRepeat: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private store: Store<AppState>) { }

  onSubmit(): void {
    const { email, password } = this.registerForm.value;

    this.store.dispatch(new Register({ email, password }));
  }

  get email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }

  get passwordRepeat(): FormControl {
    return this.registerForm.get('passwordRepeat') as FormControl;
  }

  get passwordValidStrength(): boolean {
    return this.passwordStrength.strength === 100;
  }
}
