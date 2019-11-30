import {Component, OnInit, Input, TemplateRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PatientEditModalComponent } from '../patient-edit-modal/patient-edit-modal.component';

@Component({
    selector: 'app-patient-detail',
    templateUrl: './patient-detail.component.html',
    styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {
    patient: Patient = null;

    constructor(
        private route: ActivatedRoute,
        private patientService: PatientService,
        private location: Location,
        private modalService: NgbModal
    ) { }

    ngOnInit() {
        this.getPatient();
    }

    getPatient(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.patientService.getPatient(id)
            .subscribe(patient => this.patient = patient[0]);
    }

    goBack(): void {
        this.location.back();
    }

    openEditModal(): void {
        const modalRef = this.modalService.open(PatientEditModalComponent, { size: 'lg' });
        modalRef.componentInstance.patientId = this.patient.patient_id;

        modalRef.result.then((result) => {
            console.log(result);
        }).catch((error) => {
            console.log(error);
        });
    }

    save(): void {
        this.patientService.updatePatient(this.patient)
            .subscribe(() => this.goBack());
    }
}
