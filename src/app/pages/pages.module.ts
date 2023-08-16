import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { MedicalAppointmentComponent } from './medical-appointment/medical-appointment.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { RegisterPatientComponent } from './register-patient/register-patient.component';



@NgModule({
  declarations: [DashboardComponent,ListPatientComponent,MedicalAppointmentComponent, RegisterPatientComponent],

  exports: [DashboardComponent,ListPatientComponent,MedicalAppointmentComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class PagesModule { }
