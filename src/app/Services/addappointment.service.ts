import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddappointmentService {
  private apiUrl = "https://localhost:7199/api/Appointment/appointments"; // ✅ API Endpoint

  constructor(private http: HttpClient) {}

  addAppointment(appointment: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, appointment);
  }
}
