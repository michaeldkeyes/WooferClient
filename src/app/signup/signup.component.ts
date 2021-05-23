import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  errorState: boolean = false;
  errorMessage: string = '';

  password1: string;
  password2: string;

  user: User;

  constructor(private signupService: SignupService) {
    this.user = new User();
  }

  ngOnInit(): void {}

  submit(): void {
    this.errorState = false;
    if (this.password1 !== this.password2) {
      this.errorState = true;
      this.errorMessage = 'Passwords must match';
    } else if (!this.user.username) {
      this.errorState = true;
      this.errorMessage = 'Username is required';
    } else if (!this.password1) {
      this.errorState = true;
      this.errorMessage = 'Password is required';
    } else if (!this.user.dob) {
      this.errorState = true;
      this.errorMessage = 'Date of birth is required';
    } else {
      this.user.password = this.password1;
      this.signupService.addUser(this.user).subscribe((res) => {
        this.user = new User();
      });

      alert('user created');
    }
  }
}
