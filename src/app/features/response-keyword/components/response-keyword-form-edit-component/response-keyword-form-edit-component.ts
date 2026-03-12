import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseKeywordService } from '../../service/response-keyword-service';
import { ResponseKeyword } from '../../model/response-keyword.model';

@Component({
  selector: 'app-response-keyword-form-edit-component',
  templateUrl: './response-keyword-form-edit-component.html',
  standalone: false
})
export class ResponseKeywordFormEditComponent implements OnInit {
  responseKeywordForm!: FormGroup;
  responseKeywordId!: string;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private responseKeywordService: ResponseKeywordService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.responseKeywordId = this.route.snapshot.paramMap.get('id') || '';
    this.responseKeywordForm = this.fb.group({
      keyword: ['', Validators.required],
      interpretedText: ['', Validators.required],
      status: ['', Validators.required],
      sourceID: ['', Validators.required]
    });
    if (this.responseKeywordId) {
      this.loading = true;
      this.responseKeywordService.getById(this.responseKeywordId).subscribe({
        next: (responseKeyword: ResponseKeyword) => {
          this.responseKeywordForm.patchValue(responseKeyword);
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }
  }

  onSubmit(): void {
    if (this.responseKeywordForm.valid) {
      const updatedResponseKeyword = this.responseKeywordForm.value;
      this.responseKeywordService.update(this.responseKeywordId, updatedResponseKeyword).subscribe({
        next: () => {
          this.router.navigate(['/responseKeyword']);
        },
        error: (err) => {
          console.error('Error updating response keyword:', err);
        }
      });
    } else {
      this.responseKeywordForm.markAllAsTouched();
    }
  }
} 