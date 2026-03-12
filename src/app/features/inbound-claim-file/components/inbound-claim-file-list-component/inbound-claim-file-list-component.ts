import { Component, OnInit } from '@angular/core';
import { InboundClaimFile } from '../../model/inbound-claim-file-model';
import { InboundClaimFileService } from '../../service/inbound-claim-file-service';

@Component({
  selector: 'app-inbound-claim-file-list-component',
  standalone: false,
  templateUrl: './inbound-claim-file-list-component.html',
  styleUrl: './inbound-claim-file-list-component.scss'
})
export class InboundClaimFileListComponent implements OnInit {
  inboundClaimFiles: InboundClaimFile[] = [];
  selectedInboundClaimFile: InboundClaimFile | null = null;
  showDeleteModal = false;

  constructor(private inboundClaimFileService: InboundClaimFileService) {}

  ngOnInit(): void {
    this.loadInboundClaimFiles();
  }

  loadInboundClaimFiles(): void {
    this.inboundClaimFileService.getAll().subscribe(files => this.inboundClaimFiles = files);
  }

  openDeleteDialog(inboundClaimFile: InboundClaimFile) {
    this.selectedInboundClaimFile = inboundClaimFile;
    this.showDeleteModal = true;
  }

  onDeleteDialogClosed(confirmed: boolean) {
    this.showDeleteModal = false;
    if (confirmed && this.selectedInboundClaimFile) {
      this.inboundClaimFileService.delete(this.selectedInboundClaimFile.id!).subscribe(() => this.loadInboundClaimFiles());
    }
  }
}
