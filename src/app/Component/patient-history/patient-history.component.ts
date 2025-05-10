import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MedhistserviceService } from '../../Services/medhistservice.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-patient-history',
  standalone: true,
  imports:[FormsModule,CommonModule],
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.css']
})
export class PatientHistoryComponent {
  phoneNumber: string = ''; // ✅ Patient enters phone number
  medicalHistory: any[] = [];
  // router: any;

  
  constructor(private medhistService: MedhistserviceService,private location: Location) {}

  fetchMedicalHistory(): void {
    if (!this.phoneNumber) {
      alert("Please enter a phone number.");
      return;
    }
  
    this.medhistService.getMedicalHistory(this.phoneNumber).subscribe({
      
      next: (response: any) => {
        
        console.log("Medical History Data:", response);
  
        // ✅ Ensure medical history array is properly assigned
        if (Array.isArray(response)) {
          this.medicalHistory = response;
        } else if (response.$values && Array.isArray(response.$values)) {
          this.medicalHistory = response.$values;
        } else {
          this.medicalHistory = [];
        }
      },
      error: (error: any) => {
        console.error("Error fetching medical history:", error);
        alert("Failed to retrieve medical history.");
      }
    });
  }
  goBack(): void {
    this.location.back();
  }
}
