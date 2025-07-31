import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../service/patient-service';
import { Patient } from '../../model/patient.model';

@Component({
  selector: 'app-patient-form-list-component',
  templateUrl: './patient-form-list-component.html',
  standalone: false,
  styleUrls: ['./patient-form-list-component.scss']
})
export class PatientFormListComponent implements OnInit {
  patients: Patient[] = [];
  selectedPatient: Patient | null = null;
  showDeleteModal = false;

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients(): void {
    this.patientService.getAll().subscribe(patients => this.patients = patients);
  }

  openDeleteDialog(patient: Patient) {
    this.selectedPatient = patient;
    this.showDeleteModal = true;
  }

  onDeleteDialogClosed(confirmed: boolean) {
    this.showDeleteModal = false;
    if (confirmed && this.selectedPatient) {
      this.patientService.delete(this.selectedPatient.id!).subscribe(() => this.loadPatients());
    }
  }
} 