import { Component } from '@angular/core';
import { AvalibleslotsService } from '../../Services/avalibleslots.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-avalibleslot',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './avalibleslot.component.html',
  styleUrls: ['./avalibleslot.component.css']
})
export class AvalibleslotComponent {
  doctorId: number = 0;
  selectedDate: string = '';
  slots: any[] = [];
  errorMessage: string = '';

  constructor(private slotsService: AvalibleslotsService) {}

  fetchSlots(): void {
    if (!this.doctorId || !this.selectedDate) {
      alert("Please enter Doctor ID and select a date.");
      return;
    }

    
  this.slotsService.getUnbookedSlotsByDoctorAndDate(this.doctorId, this.selectedDate).subscribe({
    next: (response: any) => {
      console.log("Raw API Response:", response);

      // ✅ Extract `$values` array if present
      if (response.$values && Array.isArray(response.$values)) {
        this.slots = response.$values;
        this.errorMessage = ''; // ✅ Clear previous error message
      } else {
        this.slots = [];
        this.errorMessage = "Doctor is not available on this day"; // ✅ Show message
      }

      console.log("Processed slots:", this.slots);
    },
    error: (error: any) => {
      console.error("Error fetching slots:", error);

      if (error.status === 404) {
        this.slots = []; // ✅ Clear previous slots
        this.errorMessage = "Doctor is not available on this day"; // ✅ Display correct message
      } else {
        this.errorMessage = "Failed to fetch slots. Please try again later.";
      }
    }
    });
  }
}
