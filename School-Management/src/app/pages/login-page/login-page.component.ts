import { Component } from '@angular/core';

import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  userName = new FormControl('', [Validators.required]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  loginform = new FormGroup({
    userName: this.userName,
    password: this.password,
  });

  onSubmit() {
    if (this.loginform.valid) {
      console.log(this.loginform.value);
    } else {
      alert('Invalid Form');
    }
  }
}
