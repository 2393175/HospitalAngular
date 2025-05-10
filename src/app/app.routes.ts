import { Routes } from '@angular/router';
import { AboutComponent } from './Component/about/about.component';
import { AllDoctorsComponent } from './Component/all-doctors/all-doctors.component';
import { ContactnumberComponent } from './Component/contactnumber/contactnumber.component';
import { HerosectionComponent } from './Component/herosection/herosection.component';

import { AddappointmentComponent } from './Component/addappointment/addappointment.component';

import { AvalibleslotComponent } from './Component/avalibleslot/avalibleslot.component';
import { HomeComponent } from './Component/home/home.component';
import { DoctorstodaysappComponent } from './Component/doctorstodaysapp/doctorstodaysapp.component';
import { PatientHistoryComponent } from './Component/patient-history/patient-history.component';
import { StaffHomeComponent } from './Component/staff-home/staff-home.component';
import { AddSlotsComponent } from './Component/add-slots/add-slots.component';
import { DoctorDetailsComponent } from './Component/doctor-details/doctor-details.component';
import { PatientHomeComponent } from './Component/patient-home/patient-home.component';
import { AddDoctorComponent } from './Component/add-doctor/add-doctor.component';
import { LoginPageComponent } from './Component/login-page/login-page.component';
import { PatientUpcomingappComponent } from './Component/patient-upcomingapp/patient-upcomingapp.component';
import { SignupComponent } from './Component/signup/signup.component';
import { AddmedicalhistoryComponent } from './Component/addmedicalhistory/addmedicalhistory.component';
// import { TokenGuard } from './Guard/token.guard';
export const routes: Routes = [
    {
        path:'app-about',
        component:AboutComponent

    },
   
    {
        path:'app-contactnumber',
        component:ContactnumberComponent

    },
    {
        path:'',
        component:HerosectionComponent

    },
    
    {
        path:'app-addappointment',
        component:AddappointmentComponent

    },
    {
        path:'app-avalibleslot',
        component:AvalibleslotComponent

    },
    {
        path:'app-home',
        component:HomeComponent
    },
    {
        path:'app-doctorstodaysapp',
        component:DoctorstodaysappComponent
    },
    {
        path:'app-patient-history',
        component:PatientHistoryComponent
    },
    {
        path:'app-staff-home',
        component:StaffHomeComponent
    },
    {
        path:'app-add-slots',
        component:AddSlotsComponent
    },
    {
        path:'app-doctor-details',
        component:DoctorDetailsComponent
    },
    {
        path:'app-patient-home',
        component:PatientHomeComponent
    },
    {
        path:'app-add-doctor',
        component:AddDoctorComponent
    },
    {
        path:'app-login-page',
        component:LoginPageComponent
    },
    {
        path:'app-patient-upcomingapp',
        component:PatientUpcomingappComponent
    },
    {
        path:'app-signup',
        component:SignupComponent
    },
    {
        path:'app-addmedicalhistory',
        component:AddmedicalhistoryComponent
    }
    
    
    

];
