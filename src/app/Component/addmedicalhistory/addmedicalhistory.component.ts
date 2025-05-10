import { Component } from '@angular/core';
import { MedicalservicesService } from '../../Services/medicalservices.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmedicalhistory',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './addmedicalhistory.component.html',
  styleUrl: './addmedicalhistory.component.css'
})
export class AddmedicalhistoryComponent {
  medicalHistoryForm: FormGroup;
 
  constructor(private fb: FormBuilder, private medicalService: MedicalservicesService,private router: Router) {
    this.medicalHistoryForm = this.fb.group({
      patientId: ['', Validators.required],
      diagnosis: ['', Validators.required],  // Ensure this matches the form template
      treatment: ['', Validators.required],  // Ensure this matches the form template
      DateRecorded: ['', Validators.required]        // Ensure this matches the form template
    });
  }
 
  submitForm(): void {
    if (this.medicalHistoryForm.valid) {
      this.medicalService.addMedicalHistory(this.medicalHistoryForm.value)
        .subscribe({
          next: () => {
            alert('Medical history added successfully!');

            // Redirect to patient-home after alert
            this.router.navigate(['/app-patient-home']);
          },
          error: (err) => {
            console.error('Error adding medical history:', err);
            alert('Failed to add medical history. Please try again.');
          }
        });
    } else {
      alert('Please fill in all fields.');
    }
  }

}
