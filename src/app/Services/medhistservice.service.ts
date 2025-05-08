import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedhistserviceService {

  private apiUrl = "https://localhost:7199/api/Patients/medical-history"; // ✅ API Endpoint

  constructor(private http: HttpClient) {}

  getMedicalHistory(phoneNumber: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${phoneNumber}`);
  }
}
