import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvalibleslotsService {

  private apiUrl = "https://localhost:7199/api/Slot/available"; // ✅ API Endpoint

  constructor(private http: HttpClient) {}

  getUnbookedSlotsByDoctorAndDate(doctorId: number, date: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?doctorId=${doctorId}&date=${date}`);
  }
}
