import { Component, OnInit } from '@angular/core';
import { ResponseKeywordService } from '../../service/response-keyword-service';
import { ResponseKeyword } from '../../model/response-keyword.model';

@Component({
  selector: 'app-response-keyword-form-list-component',
  templateUrl: './response-keyword-form-list-component.html',
  standalone: false,
  styleUrls: ['./response-keyword-form-list-component.scss']
})
export class ResponseKeywordFormListComponent implements OnInit {
  responseKeywords: ResponseKeyword[] = [];
  selectedResponseKeyword: ResponseKeyword | null = null;
  showDeleteModal = false;

  constructor(private responseKeywordService: ResponseKeywordService) {}

  ngOnInit(): void {
    this.loadResponseKeywords();
  }

  loadResponseKeywords(): void {
    this.responseKeywordService.getAll().subscribe(responseKeywords => this.responseKeywords = responseKeywords);
  }

  openDeleteDialog(responseKeyword: ResponseKeyword) {
    this.selectedResponseKeyword = responseKeyword;
    this.showDeleteModal = true;
  }

  onDeleteDialogClosed(confirmed: boolean) {
    this.showDeleteModal = false;
    if (confirmed && this.selectedResponseKeyword) {
      this.responseKeywordService.delete(this.selectedResponseKeyword.id!).subscribe(() => this.loadResponseKeywords());
    }
  }
} 