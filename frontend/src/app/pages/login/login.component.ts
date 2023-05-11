import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  email: string=''
  password: string=''
  emailPattern: string = '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}';
  passwordPattern:string='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'
  loginForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.pattern(this.passwordPattern)]]
    });
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      // Handle form validation errors
      return;
    }
    //  login logic example
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  
  }
}
