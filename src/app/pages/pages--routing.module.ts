import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { MedicalAppointmentComponent } from './medical-appointment/medical-appointment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterPatientComponent } from './register-patient/register-patient.component';

const routes: Routes =[
  {path: 'dashboard', component: PagesComponent, children: [
    {path: 'patient', component: DashboardComponent},
    {path:'list-patient',component: ListPatientComponent},
    {path: 'medical-appointment',component:MedicalAppointmentComponent},
    {path:'register-patient',component: RegisterPatientComponent}
  ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
