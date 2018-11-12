import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export const matchingPasswordsValidator: ValidatorFn =
  (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const passwordRepeat = control.get('passwordRepeat');

    return password.value !== passwordRepeat.value ? { match: true } : null;
  };
