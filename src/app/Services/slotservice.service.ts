import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
 
 
 
 
 
export interface Slot {
  slotDate: string;
  startTime: string;
  endTime: string;
  doctorId: number;
  isBooked: boolean;
}
 
 
@Injectable({
  providedIn: 'root'
})
export class SlotserviceService {
 
  private apiUrl = 'https://localhost:7199/api/Slot/GenerateSlots'; // API URL
 
  constructor(private http: HttpClient) {}
 
  // Method to call the GenerateSlots API
  generateSlots(
    startDate: string,
    endDate: string,
    slotDuration: string,
    dailyStartTime: string,
    dailyEndTime: string,
    doctorId: number
  ): Observable<Slot[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {
      startDate,
      endDate,
      slotDuration,
      dailyStartTime,
      dailyEndTime,
      doctorId
    };
 
    return this.http.post<Slot[]>(this.apiUrl, body, { headers });
  }
}
 
 