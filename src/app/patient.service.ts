import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patient } from './patient';
import { MessageService } from './message.service';


@Injectable({
    providedIn: 'root'
})
export class PatientService {

    private patientsUrl = 'http://localhost:3000/api/patients'; // URL to web api

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) { }

    getPatients (): Observable<Patient[]> {
        return this.http.get<Patient[]>(this.patientsUrl)
            .pipe(
                tap(_ => this.log('fetched patients')),
                catchError(this.handleError('getPatients', []))
            );
    }

    /** Get patient by id. Will 404 if id not found */
    getPatient (id: number): Observable<Patient> {
        const url = `${this.patientsUrl}/${id}`;
        return this.http.get<Patient>(url).pipe(
            tap(_ => this.log(`fetched patient id=${id}`)),
            catchError(this.handleError<Patient>(`getPatient id=${id}`))
        );
    }

    addPatient (patient: Patient): Observable<Patient> {
        return this.http.post<Patient>(this.patientsUrl, patient, this.httpOptions).pipe(
            tap((newPatient: Patient) => this.log(`added patient w/ id=${newPatient.patient_id}`)),
            catchError(this.handleError<Patient>('addPatient'))
        );
    }

    updatePatient (patient: Patient): Observable<any> {
        return this.http.put(`${this.patientsUrl}/add`, patient, this.httpOptions).pipe(
            tap(_ => this.log(`updated patient id=${patient.patient_id}`)),
            catchError(this.handleError<any>('updatePatient'))
        );
    }

    deletePatient (patient: Patient | number): Observable<Patient> {
        const id = typeof patient === 'number' ? patient : patient.patient_id;
        const url = `${this.patientsUrl}/${id}`;

        return this.http.delete<Patient>(url, this.httpOptions).pipe(
            tap(_ => this.log(`deleted patient id=${id}`)),
            catchError(this.handleError<Patient>('deletePatient'))
        );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    private log (message: string) {
        this.messageService.add(`PatientService: ${message}`);
    }
}
