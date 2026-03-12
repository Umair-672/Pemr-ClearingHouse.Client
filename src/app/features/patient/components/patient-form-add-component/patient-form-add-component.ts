import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../../service/patient-service';
import { SubscriberService } from '../../../subscriber/service/subscriber-service';
import { Router } from '@angular/router';
import { Patient } from '../../model/patient.model';
import { Subscriber } from '../../../subscriber/model/subscriber.model';
import { DropdownConfig, DropdownOption } from '../../../../shared/components/searchable-dropdown/searchable-dropdown.component';

@Component({
  selector: 'app-patient-form-add-component',
  templateUrl: './patient-form-add-component.html',
  standalone: false
})
export class PatientFormAddComponent implements OnInit {
  patientForm!: FormGroup;
  subscribers: Subscriber[] = [];

  subscriberDropdownConfig: DropdownConfig = {
    displayProperty: 'firstName',
    valueProperty: 'id',
    placeholder: 'Select subscriber...',
    searchPlaceholder: 'Search and select subscriber...',
    noResultsText: 'No subscribers found',
    icon: 'bi-person',
    maxHeight: '200px',
  };

  constructor(
    private fb: FormBuilder,
    private patientService: PatientService,
    private subscriberService: SubscriberService,
    private router: Router
  ) { }

  ngOnInit(): void {
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
  }

  loadSubscribers(): void {
    this.subscriberService.getAll().subscribe(subscribers => this.subscribers = subscribers);
  }

  onSubscriberSelectionChange(selectedOption: DropdownOption | null): void {
    if (selectedOption) {
      const selectedSubscriber = selectedOption as Subscriber;
      this.patientForm.get('subscriberID')?.setValue(selectedSubscriber.id);
    } else {
      this.patientForm.get('subscriberID')?.setValue('');
    }
  }

  onSubmit(): void {
    if (this.patientForm.valid) {
      const patient: Patient = this.patientForm.value;
      this.patientService.create(patient).subscribe({
        next: () => {
          this.patientForm.reset();
          this.router.navigate(['/patient']);
        },
        error: (err) => {
          console.error('Error adding patient:', err);
        }
      });
    } else {
      this.patientForm.markAllAsTouched();
    }
  }
} 