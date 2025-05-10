import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface PatientDto {
  patientId?: number;
  patientName: string;
  patientEmail: string;
  patientPhoneNumber: string;
  patientDateOfBirth: string;
}

@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {

  private apiUrl = 'https://localhost:7199/api/Patients/patients';

  constructor(private http: HttpClient) {}

  addPatient(patientDto: PatientDto): Observable<any> {
    return this.http.post<any>(this.apiUrl, patientDto, {
      headers: { 'Content-Type': 'application/json' } // Explicit JSON request
    });
  }
}
