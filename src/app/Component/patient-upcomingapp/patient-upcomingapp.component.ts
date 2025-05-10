import { Component, OnInit } from '@angular/core';

// Adjust the path as needed
// Adjust the path as needed

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppointmentDto, PatientupcomingappService } from '../../Services/patientupcomingapp.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-patient-upcomingapp',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './patient-upcomingapp.component.html',
  styleUrl: './patient-upcomingapp.component.css'
})
export class PatientUpcomingappComponent  {
  upcomingAppointments: AppointmentDto[] = [];
  patientId: number | null = null;
  hasSearched: boolean = false;

  constructor(private patientService: PatientupcomingappService,private router: Router) {}




  ngOnInit(): void {
    this.loadPatientId();

    // Listen for localStorage changes
    window.addEventListener('storage', () => this.loadPatientId());
  }

  ngOnDestroy(): void {
    // Cleanup listener when component is destroyed
    window.removeEventListener('storage', () => this.loadPatientId());
  }

  loadPatientId(): void {
    
    const storedRoleId = localStorage.getItem('roleId');
    if (storedRoleId) {
      this.patientId = Number(storedRoleId);
    }
  }






  fetchUpcomingAppointments(): void {
    this.hasSearched = true;

  if (!this.patientId) {
    this.upcomingAppointments = [];
    return;
  }

  this.patientService.getUpcomingAppointments(this.patientId).subscribe({
    next: (appointments) => {
      console.log('Processed Appointments:', appointments);
      this.upcomingAppointments = appointments; // Already extracted, no need for $values
    },
    error: (err) => {
      console.error('Error fetching appointments:', err);
      this.upcomingAppointments = [];
    }
  });
}
goBack():void {
  this.router.navigate(['app-patient-home']);
}
}
