// this component binds data from template
// to auth service register() method that 
// returns observable object
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
    email: null,
    confirmPassword: null
  };

  isSuccessful = false;
  isSignupFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, password, email } = this.form
    this.authService.register(username, email, password).subscribe({
      next: (data) => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignupFailed = false;
      },
      error: (error) => {
        this.errorMessage = error.error.message;
        this.isSignupFailed = true;
      }
    });
  }

}
