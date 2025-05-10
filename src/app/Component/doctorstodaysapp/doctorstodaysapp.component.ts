import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DoctortodaysappserviceService } from '../../Services/doctortodaysappservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-doctorstodaysapp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './doctorstodaysapp.component.html',
  styleUrl: './doctorstodaysapp.component.css'
})
export class DoctorstodaysappComponent {
  doctorId: number = 0;
  appointments: any[] = [];
 

  constructor(private doctorAppointmentsService: DoctortodaysappserviceService,private router: Router) {}

  fetchTodaysAppointments(): void {
    if (!this.doctorId) {
      alert("Please enter a Doctor ID.");
      return;
    }
  
    this.doctorAppointmentsService.getTodaysAppointmentsByDoctor(this.doctorId).subscribe({
      next: (response: any) => {
        console.log("Doctor's Appointments Today:", response);
        this.appointments = response;
      },
      error: (error: any) => {
        console.error("Error fetching appointments:", error);
        
        if (error.status === 404) {
          alert("No appointments found for this doctor today.");
        } else {
          alert("Failed to retrieve today's appointments. Please try again.");
        }
      }
    });
  }
  goBack():void {
    this.router.navigate(['app-home']);
  }
}
