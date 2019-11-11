import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    private patients = new BehaviorSubject<Patient[]>(null);
    public patients$ = this.patients.asObservable();

    constructor(private patientService: PatientService) { }

    ngOnInit() {
        this.getPatientsSnapshot();
    }

    getPatientsSnapshot(): void {
        this.patientService.getPatients()
            .subscribe(patients => this.patients.next(patients) // patients.slice(1, 3)
        );
    }
}
