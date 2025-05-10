import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
interface MedicalHistory {
  patientId: number;
  diagnosis: string;
  treatment: string;
  DateRecorded: string;
}

@Injectable({
  providedIn: 'root'
})
export class MedicalservicesService {

  private apiUrl = 'https://localhost:7199/api/MedicalHistory/medical-histories';
  medicalService: any;
 
  constructor(private http: HttpClient) {}
 
  // ✅ Method to add medical history
  addMedicalHistory(medicalHistory: MedicalHistory): Observable<any> {
    return this.http.post(this.apiUrl, medicalHistory);
  }
 
  // ✅ Method to fetch medical histories
  getMedicalHistories(): void {
    this.medicalService.getMedicalHistories()
      .subscribe({
        next: (data: any) => console.log('Medical histories:', data),
        error: (err: any) => console.error('Error fetching medical histories:', err)
      });
  }
}
