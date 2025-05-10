import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports:[RouterLink,CommonModule,FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  UserName = '';
  Password = '';
  errorMessage = '';

  constructor(private router: Router, private http: HttpClient) {}

  onSubmit() {
    const loginData = {
      UserName: this.UserName,
      Password: this.Password
    };

    console.log("Sending Login Request:", loginData);
    
    this.http.post("https://localhost:7199/api/Auth/login", loginData).subscribe({
      next: (response: any) => {
        console.log("Login successful:", response);
        alert("Login successful!");

        // ✅ Store Token in Local Storage
        localStorage.setItem('token', response.token);

        // ✅ Decode JWT Token
        const decodedToken = this.decodeJWT(response.token);
        if (!decodedToken) {
          console.error("Failed to decode token.");
          return;
        }

        const userRole = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
        const roleId = decodedToken["RoleId"];

        console.log("User Role:", userRole);
        console.log("Role ID:", roleId);

        // ✅ Store RoleId in Local Storage
        localStorage.setItem('roleId', roleId);
        localStorage.setItem('userRole', userRole);
        

        // ✅ Route Based on Role
        if (userRole === "Doctor") {
          this.router.navigate(['/app-home']);
        } else if (userRole === "Patient") {
          this.router.navigate(['/app-patient-home']);
        } else if (userRole === "Staff") {
          this.router.navigate(['/app-staff-home']);
        } else {
          alert("Invalid role detected.");
        }
      },
      error: (error) => {
        console.error("Login error:", error);
        this.errorMessage = "Invalid username or password.";
      }
    });
  }

  decodeJWT(token: string): any {
    try {
      const base64Url = token.split('.')[1]; // Extract payload
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(c =>
        '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      ).join(''));

      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  }
}
