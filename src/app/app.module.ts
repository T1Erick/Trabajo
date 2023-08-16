import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { NoFoundPageComponent } from './nofoundpages/nofoundpage.component';
import {  RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { ListPatientComponent } from './pages/list-patient/list-patient.component';
import { MedicalAppointmentComponent } from './pages/medical-appointment/medical-appointment.component';
import { PagesModule } from './pages/pages.module';
import { PagesRoutingModule } from './pages/pages--routing.module';
import { SharedComponent } from './shared/shared.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { SharedModule } from './shared/shared.module';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: '**', component: NoFoundPageComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    NoFoundPageComponent,
    LoginComponent,
    PagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    PagesRoutingModule,
    SharedModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
