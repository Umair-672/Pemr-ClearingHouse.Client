import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResponseKeywordService } from '../../service/response-keyword-service';
import { Router } from '@angular/router';
import { ResponseKeyword } from '../../model/response-keyword.model';

@Component({
  selector: 'app-response-keyword-form-add-component',
  templateUrl: './response-keyword-form-add-component.html',
  standalone: false
})
export class ResponseKeywordFormAddComponent implements OnInit {
  responseKeywordForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private responseKeywordService: ResponseKeywordService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.responseKeywordForm = this.fb.group({
      keyword: ['', Validators.required],
      interpretedText: ['', Validators.required],
      status: ['', Validators.required],
      sourceID: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.responseKeywordForm.valid) {
      const responseKeyword: ResponseKeyword = this.responseKeywordForm.value;
      this.responseKeywordService.create(responseKeyword).subscribe({
        next: () => {
          this.responseKeywordForm.reset();
          this.router.navigate(['/responseKeyword']);
        },
        error: (err) => {
          console.error('Error adding response keyword:', err);
        }
      });
    } else {
      this.responseKeywordForm.markAllAsTouched();
    }
  }
} 