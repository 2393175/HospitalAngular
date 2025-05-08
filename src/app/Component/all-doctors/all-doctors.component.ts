import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-doctors',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './all-doctors.component.html',
  styleUrls: ['./all-doctors.component.css']
})
export class AllDoctorsComponent {
  doctors: any[] = []; 

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchDoctors();
  }

  fetchDoctors(): void {
    this.http.get("https://localhost:7199/api/Doctor")
      .subscribe((response: any) => {
        console.log("API Response:", response); // ✅ Debugging log
        this.doctors = response;
      }, error => {
        console.error("Error fetching doctors:", error);
      });
  }
  

  goBack(): void {
    this.router.navigate(['/app-addappointment']);
  }
}
