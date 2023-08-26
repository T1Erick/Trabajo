import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.css']
})
export class ListPatientComponent {
  constructor(private router: Router){}
  navigateToCita() {
    this.router.navigateByUrl("/dashboard/medical-appointment");
  }


}
