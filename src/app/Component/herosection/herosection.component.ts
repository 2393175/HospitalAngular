import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-herosection',
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './herosection.component.html',
  styleUrl: './herosection.component.css'
})
export class HerosectionComponent {
  backgroundImages: string[] = [
    "url('https://cdnassets.hw.net/3d/29/281cbc974be089f71a6643ece547/52cd364253084b45b06bb5b083d5b065.jpg')",
    "url('https://www.demandhub.co/assets/images/demandhub/articles/patient-appointment-scheduling/patient-appointment-scheduling-header.webp')",
    "url('https://image.freepik.com/free-photo/doctor-checking-patient_53876-39304.jpg')",
    "url('https://tse4.mm.bing.net/th/id/OIP.HQ5Crd7iKYDiTlbxqM8Q-wHaE8?rs=1&pid=ImgDetMain')"

  ];
  currentBackgroundImage: string = this.backgroundImages[0];
  private imageIndex: number = 0;

  ngOnInit() {
    this.changeBackgroundImage();
  }

  changeBackgroundImage() {
    setInterval(() => {
      this.imageIndex = (this.imageIndex + 1) % this.backgroundImages.length;
      this.currentBackgroundImage = this.backgroundImages[this.imageIndex];
    }, 2000); // Change image every 2 seconds
  }

}
