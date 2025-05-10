import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface AppointmentDto{
  appointmentId: number;
  patientId: number;
  doctorId: number;
  slotId: number;
  appointmentDate: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class PatientupcomingappService {

  private apiUrl = 'https://localhost:7199/api/Appointment/upcoming';

  constructor(private http: HttpClient) {}

  getUpcomingAppointments(patientId: number): Observable<AppointmentDto[]> {
    return this.http.get<any>(`${this.apiUrl}/${patientId}`).pipe(
      map((response: { $values?: AppointmentDto[] }) => response.$values ?? []) // Extract $values safely
    );
  }
  
}
