import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../../service/patient-service';
import { SubscriberService } from '../../../subscriber/service/subscriber-service';
import { Patient } from '../../model/patient.model';
import { Subscriber } from '../../../subscriber/model/subscriber.model';

@Component({
  selector: 'app-patient-form-edit-component',
  templateUrl: './patient-form-edit-component.html',
  standalone: false
})
export class PatientFormEditComponent implements OnInit {
  patientForm!: FormGroup;
  patientId!: string;
  subscribers: Subscriber[] = [];
  loading = false;

  constructor(
    private fb: FormBuilder,
    private patientService: PatientService,
    private subscriberService: SubscriberService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.patientId = this.route.snapshot.paramMap.get('id') || '';
    this.patientForm = this.fb.group({
      subscriberID: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: [''],
      primaryIdentification: ['', Validators.required],
      address1: ['', Validators.required],
      address2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      secondaryIdentification: [''],
      relationshipCode: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required]
    });
    this.loadSubscribers();
    if (this.patientId) {
      this.loading = true;
      this.patientService.getById(this.patientId).subscribe({
        next: (patient: Patient) => {
          this.patientForm.patchValue(patient);
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }
  }

  loadSubscribers(): void {
    this.subscriberService.getAll().subscribe(subscribers => this.subscribers = subscribers);
  }

  getSelectedSubscriberName(): string {
    const selectedId = this.patientForm.get('subscriberID')?.value;
    return this.subscribers.find(s => s.id === selectedId)?.firstName + ' ' + this.subscribers.find(s => s.id === selectedId)?.lastName;
  }

  onSubmit(): void {
    if (this.patientForm.valid) {
      const updatedPatient = this.patientForm.value;
      this.patientService.update(this.patientId, updatedPatient).subscribe({
        next: () => {
          this.router.navigate(['/patient']);
        },
        error: (err) => {
          console.error('Error updating patient:', err);
        }
      });
    } else {
      this.patientForm.markAllAsTouched();
    }
  }
}
