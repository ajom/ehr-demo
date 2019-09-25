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

    constructor(private patientService: PatientService) { }

    ngOnInit () {
        this.getPatients();
    }

    getPatients (): void {
        this.patientService.getPatients()
            .subscribe(patients => this.patients = patients);
    }

    addPatient (firstName: string, lastName: string, dob: string, sex: string, address: string, phone: string): void {
        firstName = firstName.trim();
        lastName = lastName.trim();
        dob = dob.trim();
        sex = sex.trim();
        address = address.trim();
        phone = phone.trim();

        if (!firstName || !lastName) { return; }
        this.patientService.addPatient({
            firstName,
            lastName,
            dob,
            sex,
            address,
            phone,
        } as Patient)
            .subscribe(patient => {
                this.patients.push(patient);
            });
    }

    deletePatient (patient: Patient): void {
        this.patients = this.patients.filter(p => p !== patient);
        this.patientService.deletePatient(patient).subscribe();
    }
}
