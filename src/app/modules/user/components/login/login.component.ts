import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  onSubmit(): void {
    console.log('sss', this.loginForm.valid, this.loginForm.value);
  }

  get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get emailErrors(): any {
    return this.email.errors;
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  get passwordErrors(): any {
    return this.password.errors;
  }
}
