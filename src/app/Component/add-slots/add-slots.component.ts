import { Component } from '@angular/core';
import { SlotserviceService } from '../../Services/slotservice.service';
import { FormsModule } from '@angular/forms';
 
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-add-slots',
  standalone: true,
  imports: [ CommonModule,FormsModule],
  templateUrl: './add-slots.component.html',
  styleUrl: './add-slots.component.css'
})
export class AddSlotsComponent {
  startDate: string = '';
  endDate: string = '';
  slotDuration: string = '';
  dailyStartTime: string = '';
  dailyEndTime: string = '';
  doctorId: number | null = null;
  successMessage: string = '';
  errorMessage: string = '';
 
  constructor(private slotService: SlotserviceService,private router: Router) {}
  ngOnInit(): void {
    const roleId = localStorage.getItem('roleId');
    if (roleId) {
      this.doctorId = parseInt(roleId, 10);
      console.log("Doctor ID Retrieved from Local Storage:", this.doctorId);
    } else {
      console.error("RoleId is missing in Local Storage.");
      this.errorMessage = "You must be logged in as a Doctor to add slots.";
    }
  }
 
  // Method to generate slots
  onGenerateSlots(): void {
    if (this.startDate && this.endDate && this.slotDuration && this.dailyStartTime && this.dailyEndTime && this.doctorId) {
      const requestPayload = {
        startDate: this.startDate,
        endDate: this.endDate,
        slotDuration: this.slotDuration,
        dailyStartTime: this.dailyStartTime,
        dailyEndTime: this.dailyEndTime,
        doctorId: this.doctorId
      };
 
      console.log("Sending Request Payload:", requestPayload); // Log request payload
 
      this.slotService.generateSlots(
        this.startDate,
        this.endDate,
        this.slotDuration,
        this.dailyStartTime,
        this.dailyEndTime,
        this.doctorId
      ).subscribe(
        (response) => {
          this.successMessage = 'Slots generated successfully!';
          this.errorMessage = '';
          console.log('Generated Slots:', response);
        },
        (error) => {
          this.errorMessage = 'Failed to generate slots. Please try again.';
          this.successMessage = '';
          console.error('Error:', error);
        }
      );
    } else {
      this.errorMessage = 'Please fill in all fields.';
      this.successMessage = '';
    }
  }
  goBack():void {
    this.router.navigate(['app-home']);
  }
 
 
}
 