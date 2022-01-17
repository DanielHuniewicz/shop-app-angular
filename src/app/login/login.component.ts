import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { User } from '../interfaces/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User[] = [];

  constructor(
    private httpClient: HttpClient,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.getUser();
    
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessagePassword() {
    return this.password.hasError('required') ? 'You must enter a value' : '';
  }

  getUser(){
    this.httpClient.get<any>('https://fakestoreapi.com/users/1').subscribe(
      response => {
        this.user = response;
      }
    )
  }

  onSubmit(f: NgForm){

    if(this.email.valid && this.password.valid){
      if(Object(this.user)["email"] == this.email.value && Object(this.user)["password"] == this.password.value){
        localStorage.setItem('token', 'De71dis1jILAVTdRo0OenzBn72d');
        this.router.navigate(['']);
  
      } else {
        alert('Wrong email or password');
      }
    }
  }

}
