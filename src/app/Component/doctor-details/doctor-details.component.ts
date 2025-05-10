import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorService, Doctor } from '../../Services/services.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-doctor-details',
  standalone: true, // If this is a standalone component
  imports: [CommonModule,FormsModule], // Add CommonModule here
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
  doctors: Doctor[] = [];
  editingDoctor: Doctor | null = null; // Track the doctor being edited
 
  constructor(private doctorService: DoctorService,private router: Router) {}
 
  ngOnInit(): void {
    this.getDoctors();
  }
 
  // Fetch all doctors
  getDoctors(): void {
    this.doctorService.getAllDoctors().subscribe(
      (response: any) => {
        console.log('API Response:', response); // Log the response
        this.doctors = response.$values || response; // Extract the array if wrapped in $values
      },
      (error: any) => {
        console.error('Error fetching doctors:', error);
      }
    );
  }
 
  // Delete a doctor
  deleteDoctor(id: number): void {
    if (confirm('Are you sure you want to delete this doctor?')) {
      this.doctorService.deleteDoctor(id).subscribe(
        () => {
          console.log(`Doctor with ID ${id} deleted successfully.`);
          this.getDoctors(); // Refresh the list after deletion
        },
        (error: any) => {
          console.error('Error deleting doctor:', error);
          alert('Failed to delete the doctor. Please try again.');
        }
      );
    }
  }
 
  // Start editing a doctor
  editDoctor(doctor: Doctor): void {
    this.editingDoctor = { ...doctor }; // Create a copy of the doctor to edit
  }
 
  // Save the edited doctor
  saveDoctor(): void {
    if (this.editingDoctor) {
      this.doctorService.updateDoctor(this.editingDoctor.doctorId, this.editingDoctor).subscribe(
        (updatedDoctor: Doctor) => {
          console.log(`Doctor with ID ${this.editingDoctor?.doctorId} updated successfully.`, updatedDoctor);
          this.editingDoctor = null; // Clear the editing state
          this.getDoctors(); // Refresh the list
        },
        (error: any) => {
          console.error('Error updating doctor:', error);
          alert('Failed to update the doctor. Please try again.');
        }
      );
    }
  }
 
  // Cancel editing
  cancelEdit(): void {
    this.editingDoctor = null; // Clear the editing state
  }
  goBack():void {
    this.router.navigate(['app-staff-home']);
  }
}