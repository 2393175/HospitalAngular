import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
 
// Define the Doctor interface
export interface Doctor {
  doctorId: number;
  doctorName: string;
  specialization: string;
  doctorContactNumber: string;
  doctorEmail: string;
}
 
@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiUrl = 'https://localhost:7199/api/Doctor/doctors'; // Base API URL
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
 
  constructor(private http: HttpClient) {}
 
  /**
   * Get all doctors
   * @returns Observable<Doctor[]>
   */
  getAllDoctors(): Observable<Doctor[]> {
    return this.http.get<any>(this.apiUrl, { headers: this.headers }).pipe(
      map((response:any) => response.$values || response) // Extract $values if present
    );
  }
 
  /**
   * Get doctor by ID
   * @param id Doctor ID
   * @returns Observable<Doctor>
   */
  getDoctorById(id: number): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.apiUrl}/${id}`, { headers: this.headers });
  }
 
  /**
   * Add a new doctor
   * @param doctor Doctor object
   * @returns Observable<Doctor>
   */
  addDoctor(doctor: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(this.apiUrl, doctor, { headers: this.headers });
  }
 
  /**
   * Update an existing doctor
   * @param id Doctor ID
   * @param doctor Updated Doctor object
   * @returns Observable<Doctor>
   */
  updateDoctor(id: number, doctor: Doctor): Observable<Doctor> {
    return this.http.put<Doctor>(`${this.apiUrl}/${id}`, doctor, { headers: this.headers });
  }
 
  /**
   * Delete a doctor
   * @param id Doctor ID
   * @returns Observable<void>
   */
  deleteDoctor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.headers });
  }
 
  /**
   * Update doctor status (PATCH request)
   * @param id Doctor ID
   * @param status New status
   * @returns Observable<Doctor>
   */
  // updateDoctorStatus(id: number, status: string): Observable<Doctor> {
  //   const body = { status }; // Create a body object for the PATCH request
  //   return this.http.patch<Doctor>(`${this.apiUrl}/${id}/status`, body, { headers: this.headers });
  // }
}
 