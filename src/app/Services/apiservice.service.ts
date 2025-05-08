import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  incomingData = signal<any[]>([]);
  constructor(private http:HttpClient) { }

   fetchData(){
    this.http.get<any[]>('https://localhost:7199/api/Doctor/doctors').subscribe(
      (result) => this.incomingData.set(result)
    );
   }
}
