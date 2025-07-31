import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InterpretationFieldService } from '../../service/interpretation-field-service';
import { InterpretationEntityService } from '../../../interpretation-entity/service/interpretation-entity-service';
import { InterpretationField } from '../../model/interpretation-field.model';
import { InterpretationEntity } from '../../../interpretation-entity/model/interpretation-entity.model';

@Component({
  selector: 'app-interpretation-field-form-edit-component',
  templateUrl: './interpretation-field-form-edit-component.html',
  standalone: false
})
export class InterpretationFieldFormEditComponent implements OnInit {
  interpretationFieldForm!: FormGroup;
  interpretationFieldId!: string;
  interpretationEntities: InterpretationEntity[] = [];
  loading = false;

  constructor(
    private fb: FormBuilder,
    private interpretationFieldService: InterpretationFieldService,
    private interpretationEntityService: InterpretationEntityService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.interpretationFieldId = this.route.snapshot.paramMap.get('id') || '';
    this.interpretationFieldForm = this.fb.group({
      interpretationEntityID: ['', Validators.required],
      name: ['', Validators.required],
      code: ['', Validators.required]
    });
    this.loadInterpretationEntities();
    if (this.interpretationFieldId) {
      this.loading = true;
      this.interpretationFieldService.getById(this.interpretationFieldId).subscribe({
        next: (interpretationField: InterpretationField) => {
          this.interpretationFieldForm.patchValue(interpretationField);
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }
  }

  loadInterpretationEntities(): void {
    this.interpretationEntityService.getAll().subscribe(interpretationEntities => this.interpretationEntities = interpretationEntities);
  }

  getSelectedInterpretationEntityName(): string {
    const selectedId = this.interpretationFieldForm.get('interpretationEntityID')?.value;
    return this.interpretationEntities.find(i => i.id === selectedId)?.name ?? '';
  }

  onSubmit(): void {
    if (this.interpretationFieldForm.valid) {
      const updatedInterpretationField = this.interpretationFieldForm.value;
      this.interpretationFieldService.update(this.interpretationFieldId, updatedInterpretationField).subscribe({
        next: () => {
          this.router.navigate(['/interpretationField']);
        },
        error: (err) => {
          console.error('Error updating interpretation field:', err);
        }
      });
    } else {
      this.interpretationFieldForm.markAllAsTouched();
    }
  }
}
