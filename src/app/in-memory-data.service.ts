/*import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Patient } from './patient';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const patients = [
      { id: 11,
        firstName: 'WRONG',
        lastName: 'Schmoe',
        dob: 'July 25, 1985',
        sex: 'M',
        address: '123 Street St Boston, MA',
        phone: '1231231234',
        accessed: 'Today',
        diagnoses: '' },
      { id: 12,
        firstName: 'WRONG',
        lastName: 'Patient',
        dob: 'July 25, 1985',
        sex: 'F',
        address: '123 Street St Boston, MA',
        phone: '1231231234',
        accessed: 'Today',
        diagnoses: '' },
      { id: 13,
        firstName: 'WRONG',
        lastName: 'Patient',
        dob: 'July 25, 1985',
        sex: 'M',
        address: '123 Street St Boston, MA',
        phone: '1231231234',
        accessed: 'Today',
        diagnoses: '' }
    ];
    return {patients};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(patients: Patient[]): number {
    return patients.length > 0 ? Math.max(...patients.map(hero => hero.id)) + 1 : 11;
  }
}
*/
