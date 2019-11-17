import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
    selector: 'app-patients',
    templateUrl: './patients.component.html',
    styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

    private patients = new BehaviorSubject<Patient[]>(null);
    public patients$ = this.patients.asObservable();

    constructor(private patientService: PatientService) { }

    ngOnInit () {
        this.getPatients();
    }

    getPatients (): void {
        // this.patients$ = this.patientService.getPatients();
        this.patientService.getPatients()
            .subscribe(patients => this.patients.next(patients));
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
            first_name: firstName,
            last_name: lastName,
            dob,
            sex,
            address,
            phone,
        } as Patient)
            .subscribe(() => this.getPatients());
    }

    deletePatient (patient: Patient): void {
        this.patientService.deletePatient(patient)
            .subscribe(() => this.getPatients());
    }
}
