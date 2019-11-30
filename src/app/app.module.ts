import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientEditModalComponent } from './patient-edit-modal/patient-edit-modal.component';
import { InlineEditComponent } from './editable/inline-edit.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    PatientsComponent,
    PatientDetailComponent,
    MessagesComponent,
    PatientEditModalComponent,
    InlineEditComponent
  ],
  entryComponents: [PatientEditModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
