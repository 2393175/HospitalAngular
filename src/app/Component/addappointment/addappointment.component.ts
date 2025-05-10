import { ChangeDetectorRef, Component } from '@angular/core';

import {  Router, RouterLink, RouterLinkActive } from '@angular/router';
import {  HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { DoctorserviceService } from '../../Services/doctorservice.service';
import { AvalibleslotsService } from '../../Services/avalibleslots.service';
import { AddappointmentService } from '../../Services/addappointment.service';

@Component({
  selector: 'app-addappointment',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,RouterLinkActive,HttpClientModule],
  templateUrl: './addappointment.component.html',
  styleUrl: './addappointment.component.css'
})
export class AddappointmentComponent {
  doctors: any[] = [];
  slots: any[] = [];
  selectedDoctorId: number = 0;
  selectedDate: string = '';
  selectedSlotId: number = 0;
  patientId: number | null = null; // Now dynamic
  userRole: string | null = null; // Hardcoded for now, replace with real patient ID
  
  
  // Initialize userRole to an empty string

  constructor(
    private doctorService: DoctorserviceService ,
    private slotsService: AvalibleslotsService,
    private appointmentService: AddappointmentService,
    
    private location: Location,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getDoctors();
    this.loadPatientIdFromLocalStorage();
    window.addEventListener('storage', this.updatePatientId);
  }
  ngOnDestroy(): void {
    // ✅ Remove event listener when component is destroyed
    window.removeEventListener('storage', this.updatePatientId);
  }


  loadPatientIdFromLocalStorage(): void {
    
    this.userRole = localStorage.getItem('userRole'); // Get user role
    const storedRoleId = localStorage.getItem('roleId'); // Role ID is Patient ID

    // ✅ Auto-fill Patient ID if the role is "Patient"
    if (this.userRole === 'Patient' && storedRoleId) {
      this.patientId = Number(storedRoleId);
    } else {
      this.patientId = null; // Allow manual entry if role isn't "Patient"
    }
    this.cd.detectChanges();
  }
  updatePatientId = (): void => {
    this.loadPatientIdFromLocalStorage(); // ✅ Updates dynamically on localStorage change
  };



 
  getDoctors(): void {
    this.doctorService.getDoctors().subscribe({
      next: (response: any) => {
        console.log("Raw Doctors API Response:", response);
  
        // ✅ Extract doctors from `$values` array
        if (response.$values && Array.isArray(response.$values)) {
          this.doctors = response.$values; // Assign correct array
        } else {
          this.doctors = []; // Handle unexpected formats
        }
  
        console.log("Processed Doctors List:", this.doctors);
      },
      error: (error: any) => {
        console.error("Error fetching doctors:", error);
      }
    });
  }
  
  
  
  
  
  selectDoctor(doctorId: number): void {
    this.selectedDoctorId = doctorId;
    console.log("Selected Doctor ID:", doctorId); // ✅ Debugging step
  }
  

  fetchSlots(): void {
    if (!this.selectedDoctorId || !this.selectedDate) {
      alert("Please select a doctor and date.");
      return;
    }
  
    this.slotsService.getUnbookedSlotsByDoctorAndDate(this.selectedDoctorId, this.selectedDate).subscribe({
      next: (response: any) => {
        console.log("Raw Slots API Response:", response);
  
        // ✅ Ensure the response is correctly processed
        if (response.$values && Array.isArray(response.$values)) {
          this.slots = response.$values; // Extract slots from $values array
        } else {
          this.slots = [];
        }
  
        console.log("Processed Slots List:", this.slots);
      },
      error: (error: any) => {
        console.error("Error fetching slots:", error);
        alert("Doctor is not Available on this Day. Please try another date.");
      }
    });
  }
  selectSlot(slotId: number): void {
    this.selectedSlotId = slotId;
    console.log("Selected Slot ID:", slotId); // ✅ Debugging step
  }

  bookAppointment(): void {
    if (!this.selectedSlotId || !this.selectedDoctorId || !this.patientId) {
      alert("Please enter your Patient ID, select a doctor, date, and slot.");
      return;
    }
  
    const appointmentData = {
      PatientId: this.patientId, // ✅ Include Patient ID
      doctorId: this.selectedDoctorId,
      slotId: this.selectedSlotId,
      appointmentDate: this.selectedDate
    };
  
    this.appointmentService.addAppointment(appointmentData).subscribe({
      next: (response: any) => {
        console.log("Appointment booked successfully!", response);
        alert(response.message); // ✅ Display success message from JSON response
      },
      error: (error: any) => {
        console.error("Error booking appointment:", error);
    
        // ✅ Handle JSON response properly
        if (error.status === 400) {
          alert(error.error?.error || "Invalid request.");
        } else {
          alert(error.error?.error || "Failed to book appointment.");
        }
      }
    });
    
    
  }
  goBack(): void {
    this.location.back();
  }



  

}
