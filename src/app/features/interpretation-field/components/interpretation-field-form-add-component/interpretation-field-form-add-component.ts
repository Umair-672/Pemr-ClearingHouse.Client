import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InterpretationFieldService } from '../../service/interpretation-field-service';
import { InterpretationEntityService } from '../../../interpretation-entity/service/interpretation-entity-service';
import { Router } from '@angular/router';
import { InterpretationField } from '../../model/interpretation-field.model';
import { InterpretationEntity } from '../../../interpretation-entity/model/interpretation-entity.model';
import { DropdownConfig, DropdownOption } from '../../../../shared/components/searchable-dropdown/searchable-dropdown.component';

@Component({
  selector: 'app-interpretation-field-form-add-component',
  templateUrl: './interpretation-field-form-add-component.html',
  standalone: false
})
export class InterpretationFieldFormAddComponent implements OnInit {
  interpretationFieldForm!: FormGroup;
  interpretationEntities: InterpretationEntity[] = [];

  interpretationEntityDropdownConfig: DropdownConfig = {
    displayProperty: 'name',
    valueProperty: 'id',
    placeholder: 'Select interpretation entity...',
    searchPlaceholder: 'Search and select interpretation entity...',
    noResultsText: 'No interpretation entities found',
    icon: 'bi-collection',
    maxHeight: '200px',
  };

  constructor(
    private fb: FormBuilder,
    private interpretationFieldService: InterpretationFieldService,
    private interpretationEntityService: InterpretationEntityService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.interpretationFieldForm = this.fb.group({
      interpretationEntityID: ['', Validators.required],
      name: ['', Validators.required],
      code: ['', Validators.required]
    });
    this.loadInterpretationEntities();
  }

  loadInterpretationEntities(): void {
    this.interpretationEntityService.getAll().subscribe(interpretationEntities => this.interpretationEntities = interpretationEntities);
  }

  onInterpretationEntitySelectionChange(selectedOption: DropdownOption | null): void {
    if (selectedOption) {
      const selectedInterpretationEntity = selectedOption as InterpretationEntity;
      this.interpretationFieldForm.get('interpretationEntityID')?.setValue(selectedInterpretationEntity.id);
    } else {
      this.interpretationFieldForm.get('interpretationEntityID')?.setValue('');
    }
  }

  onSubmit(): void {
    if (this.interpretationFieldForm.valid) {
      const interpretationField: InterpretationField = this.interpretationFieldForm.value;
      this.interpretationFieldService.create(interpretationField).subscribe({
        next: () => {
          this.interpretationFieldForm.reset();
          this.router.navigate(['/interpretationField']);
        },
        error: (err) => {
          console.error('Error adding interpretation field:', err);
        }
      });
    } else {
      this.interpretationFieldForm.markAllAsTouched();
    }
  }
}
