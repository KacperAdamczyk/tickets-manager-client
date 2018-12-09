import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { RequestPasswordReset } from 'src/app/actions/user/user.actions';

@Component({
  selector: 'app-request-password-reset',
  templateUrl: './request-password-reset.component.html',
  styleUrls: ['./request-password-reset.component.scss']
})
export class RequestPasswordResetComponent {
  requestPasswordResetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
  });

  onSubmit(): void {
    const { email } = this.requestPasswordResetForm.value;

    this.store.dispatch(new RequestPasswordReset({ email }));
  }

  constructor(private fb: FormBuilder, private store: Store<AppState>) { }

  get email(): FormControl {
    return this.requestPasswordResetForm.get('email') as FormControl;
  }

}
