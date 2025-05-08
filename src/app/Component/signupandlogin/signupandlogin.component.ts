
import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';
import {  Router } from '@angular/router';
import { AuthserviceService } from '../../Services/authservice.service';

@Component({
  selector: 'app-signupandlogin',
  imports: [ReactiveFormsModule],
  templateUrl: './signupandlogin.component.html',
  styleUrl: './signupandlogin.component.css'
})
export class SignupandloginComponent implements OnInit{
  loginForm!:FormGroup;
  constructor(private authS:AuthserviceService, private router: Router){}
        ngOnInit(): void {
     this.loginForm = new FormGroup({
      username:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
     });
   }

  onSubmit():void{
    const username=this.loginForm?.get('username')?.value;
    const password = this.loginForm?.get('password')?.value;

    if(username && password){
      this.authS.login(username, password).subscribe({
        next: (response: any) => {
          if (response && response.token) {
            const token = response.token;
            this.authS.setToken(token);
            localStorage.setItem('token', token); // Store the token in local storage
            // Decode and print the token
            this.decodeToken();
            console.log(this.authS.getTokenExpiry());
            this.router.navigate(['']);
          } else {
            console.error('Invalid response');
          }
        },
        error: (error: any) => {
          console.error(error);
        },
        complete: () => {
          console.log('Request completed');
        }
      });
    } else{
      alert('Invalid Form Values...');
    }
  }

  decodeToken() {
    const decodedToken = this.authS.decodeToken();
    if (decodedToken) {
      console.log('Decoded Token:', decodedToken);
      // Now you can use the information in the token
    } else {
      console.log('No token found or unable to decode');
    }
  }

}
