import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss']
})
export class PasswordStrengthComponent {
  @Input()
  password: string;
  @Input()
  visible = false;
  @Output()
  validityChange = new EventEmitter<boolean>();

  onStrengthChange(value) {
    this.validityChange.emit(value === 100);
  }
}
