import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { of } from 'rxjs';
import { Constant } from '../Component/constant/constants';
import { jwtDecode } from 'jwt-decode';
interface user {
  username: string; 
  password: string;
  // Add other properties as needed
}

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http:HttpClient) { 

  }
  login(username:string,password:string): Observable<any>  {
    const formData = new FormData();
    formData.append('username',username);
    formData.append('password',password);
    
    //call the API
    //In Post Supply 1. URL and 2. Param
    return this.http.post(Constant.BASE_URI+Constant.LOGIN,formData).pipe(
      catchError((error:any)=>{
        console.error(error);
        return of(error);
      })
    );
  }
  getToken(): string | null  {
    return localStorage.getItem('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }
  // New method to decode the token and another method to extract tokens exp
  decodeToken(): any | null {
    const token = this.getToken();
    if (token) {
      try {
        return jwtDecode(token); // Decode the token and return its payload
      } catch (error) {
        console.error('Error decoding token:', error);
        return null;
      }
    }
    return null;
  }
  getTokenExpiry(): Date | null {
    const decodedToken = this.decodeToken();
    if (decodedToken && decodedToken.exp) {
      // Convert the exp value from Unix timestamp to a Date object
      const expiryDate = new Date(decodedToken.exp * 1000); // Multiply by 1000 to convert seconds to milliseconds
      return expiryDate;
    }
    return null;
  }
}
