import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patient: Patient = {
    id: 12345678,
    firstName: 'John',
    lastName: 'Smith',
    dob: 'July 25, 1985',
    sex: 'M',
    address: '123 Street St Boston, MA',
    phone: '1231231234',
    accessed: 'Today'
  };

  constructor() { }

  ngOnInit() {
  }

}
