import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctortodaysappserviceService {

  private apiUrl = "https://localhost:7199/api/Appointment/doctor/{doctorId}/today"; // ✅ API Endpoint

  constructor(private http: HttpClient) {}

  getTodaysAppointmentsByDoctor(doctorId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${doctorId}`);
  }
}
