import { Component, OnInit } from '@angular/core';
import { InterpretedResponseService } from '../../service/interpreted-response-service';
import { InterpretedResponse } from '../../model/interpreted-response.model';

@Component({
  selector: 'app-interpreted-response-form-list-component',
  templateUrl: './interpreted-response-form-list-component.html',
  standalone: false,
  styleUrls: ['./interpreted-response-form-list-component.scss']
})
export class InterpretedResponseFormListComponent implements OnInit {
  interpretedResponses: InterpretedResponse[] = [];
  selectedInterpretedResponse: InterpretedResponse | null = null;
  showDeleteModal = false;

  constructor(private interpretedResponseService: InterpretedResponseService) {}

  ngOnInit(): void {
    this.loadInterpretedResponses();
  }

  loadInterpretedResponses(): void {
    this.interpretedResponseService.getAll().subscribe(interpretedResponses => this.interpretedResponses = interpretedResponses);
  }

  openDeleteDialog(interpretedResponse: InterpretedResponse) {
    this.selectedInterpretedResponse = interpretedResponse;
    this.showDeleteModal = true;
  }

  onDeleteDialogClosed(confirmed: boolean) {
    this.showDeleteModal = false;
    if (confirmed && this.selectedInterpretedResponse) {
      this.interpretedResponseService.delete(this.selectedInterpretedResponse.id!).subscribe(() => this.loadInterpretedResponses());
    }
  }
} 