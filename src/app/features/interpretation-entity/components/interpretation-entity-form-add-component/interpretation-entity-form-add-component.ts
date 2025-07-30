import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InterpretationEntityService } from '../../service/interpretation-entity-service';
import { Router } from '@angular/router';
import { InterpretationEntity } from '../../model/interpretation-entity.model';

@Component({
  selector: 'app-interpretation-entity-form-add-component',
  templateUrl: './interpretation-entity-form-add-component.html',
  standalone: false
})
export class InterpretationEntityFormAddComponent implements OnInit {
  interpretationEntityForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private interpretationEntityService: InterpretationEntityService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.interpretationEntityForm = this.fb.group({
      name: ['', Validators.required],
      code: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.interpretationEntityForm.valid) {
      const interpretationEntity: InterpretationEntity = this.interpretationEntityForm.value;
      this.interpretationEntityService.create(interpretationEntity).subscribe({
        next: () => {
          this.interpretationEntityForm.reset();
          this.router.navigate(['/interpretationEntity']);
        },
        error: (err) => {
          console.error('Error adding interpretation entity:', err);
        }
      });
    } else {
      this.interpretationEntityForm.markAllAsTouched();
    }
  }
}
