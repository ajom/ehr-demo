import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-patient-edit-modal',
    templateUrl: './patient-edit-modal.component.html',
    styleUrls: ['./patient-edit-modal.component.css']
})
export class PatientEditModalComponent {
    @Input() patientId: number;
    patientForm: FormGroup;

    constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder) {
        this.createForm();
    }

    private createForm() {
        this.patientForm = this.formBuilder.group({
            first_name: '',
            last_name: '',
            dob: '',
            sex: '',
            address: '',
            phone: ''
        });
    }

    private submitForm() {
        this.activeModal.close(this.patientForm.value);
    }

    closeModal() {
        this.activeModal.close('Modal Closed');
    }
}
