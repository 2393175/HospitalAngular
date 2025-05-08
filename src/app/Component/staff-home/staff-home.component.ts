import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive} from '@angular/router';
 
@Component({
  selector: 'app-staff-home',
  standalone: true,
  imports: [RouterLink,CommonModule,RouterLinkActive],
  templateUrl: './staff-home.component.html',
  styleUrl: './staff-home.component.css'
})
export class StaffHomeComponent {
 
}