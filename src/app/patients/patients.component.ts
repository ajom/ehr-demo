import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients: Patient[];
  selectedPatient: Patient;

  onSelect(patient: Patient): void {
    this.selectedPatient = patient;
  }

  constructor(private patientService: PatientService) { }

  getPatients(): void {
    this.patientService.getPatients()
        .subscribe(patients => this.patients = patients);
  }

  ngOnInit() {
    this.getPatients();
  }

}
