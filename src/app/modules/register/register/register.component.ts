import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    name: new FormControl('', { nonNullable: true }),
    surname: new FormControl('', { nonNullable: true }),
    age: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    email: new FormControl('', { nonNullable: true }),
    username: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
  });

  constructor(private registerService: RegisterService) {}

  get name() {
    return this.registerForm.controls.name;
  }
  get surname() {
    return this.registerForm.controls.surname;
  }
  get age() {
    return this.registerForm.controls.age;
  }
  get email() {
    return this.registerForm.controls.email;
  }
  get username() {
    return this.registerForm.controls.username;
  }
  get password() {
    return this.registerForm.controls.password;
  }

  userRegister() {
    this.registerService
      .register(
        this.name.value,
        this.surname.value,
        Number(this.age.value),
        this.email.value,
        this.username.value,
        this.password.value,
      )
      .subscribe(() => {
        this.registerForm.reset();
      });
  }

  ngOnInit(): void {}
}
