import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PatientDto, SignupserviceService } from '../../Services/signupservice.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})

export class SignupComponent {



  patient: PatientDto = {
    patientName: '',
    patientEmail: '',
    patientPhoneNumber: '',
    patientDateOfBirth: ''
  };


  constructor(private signupService: SignupserviceService, private router: Router) {}

  onSubmit(): void {
    this.signupService.addPatient(this.patient).subscribe({
      next: (response) => {
        console.log('Server Response:', response);
        alert('Signup successful! Click OK to proceed to login.');
        this.router.navigate(['/app-login-page']);
      },
      error: (err) => {
        console.error('Signup failed:', err);
        alert('Signup failed. Please try again.');
      }
    });
  }

}
