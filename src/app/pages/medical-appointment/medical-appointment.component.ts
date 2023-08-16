import { Component } from '@angular/core';

@Component({
  selector: 'app-medical-appointment',
  templateUrl: './medical-appointment.component.html',
  styleUrls: ['./medical-appointment.component.css']
})
export class MedicalAppointmentComponent {

  showForm: boolean = true;

  hideForm() {
    this.showForm = false;
  }

  showtheForm() {
    this.showForm = true;
  }
}
