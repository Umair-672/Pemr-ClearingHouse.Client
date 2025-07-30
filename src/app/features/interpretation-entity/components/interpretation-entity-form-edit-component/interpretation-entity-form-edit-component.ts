import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InterpretationEntityService } from '../../service/interpretation-entity-service';
import { InterpretationEntity } from '../../model/interpretation-entity.model';

@Component({
  selector: 'app-interpretation-entity-form-edit-component',
  templateUrl: './interpretation-entity-form-edit-component.html',
  standalone: false
})
export class InterpretationEntityFormEditComponent implements OnInit {
  interpretationEntityForm!: FormGroup;
  interpretationEntityId!: string;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private interpretationEntityService: InterpretationEntityService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.interpretationEntityId = this.route.snapshot.paramMap.get('id') || '';
    this.interpretationEntityForm = this.fb.group({
      name: ['', Validators.required],
      code: ['', Validators.required]
    });
    if (this.interpretationEntityId) {
      this.loading = true;
      this.interpretationEntityService.getById(this.interpretationEntityId).subscribe({
        next: (interpretationEntity: InterpretationEntity) => {
          this.interpretationEntityForm.patchValue(interpretationEntity);
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }
  }

  onSubmit(): void {
    if (this.interpretationEntityForm.valid) {
      const updatedInterpretationEntity = this.interpretationEntityForm.value;
      this.interpretationEntityService.update(this.interpretationEntityId, updatedInterpretationEntity).subscribe({
        next: () => {
          this.router.navigate(['/interpretationEntity']);
        },
        error: (err) => {
          console.error('Error updating interpretation entity:', err);
        }
      });
    } else {
      this.interpretationEntityForm.markAllAsTouched();
    }
  }
}
