import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { Constant } from '../Component/avalibleslot/Constant';
interface AuthResponse {
  id: number;
  token: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private baseUrl = 'https://localhost:7199/api';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
 
  constructor(private http: HttpClient) {
    // Check for existing token on startup
    const token = localStorage.getItem('token');
    if (token) {
      this.isAuthenticatedSubject.next(true);
    }
  }
 
  login(UserName: string, Password: string): Observable<AuthResponse> {
   
    return this.http.post<AuthResponse>(`https://localhost:7199/api/Auth/login`, { UserName, Password })
      .pipe(
        map(response => {
          this.saveToken(response.token);
          this.isAuthenticatedSubject.next(true);
          return response;
        })
      );
  }
 
  signup(userData: any): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/auth/register`, userData)
      .pipe(
        map(response => {
          this.saveToken(response.token);
          this.isAuthenticatedSubject.next(true);
          return response;
        })
      );
  }
 
  logout(): void {
    localStorage.removeItem('token');
    this.isAuthenticatedSubject.next(false);
  }
 
  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }
 
  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }
 
  getToken(): string | null {
    return localStorage.getItem('token');
  }
  getUserId(): number | null {
    const token = this.getToken();
    if (token) {
      const decoded: any = jwtDecode(token);
      return decoded.RoleId;
    }
    return null;
  }
}