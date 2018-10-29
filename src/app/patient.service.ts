import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Patient } from './patient';
import { PATIENTS } from './mock-patients';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private messageService: MessageService) { }

  getPatients(): Observable<Patient[]> {
    // TODO: send the message _after_ fetching the patients
    this.messageService.add('PatientService: fetched patients');
    return of(PATIENTS);
  }
}
