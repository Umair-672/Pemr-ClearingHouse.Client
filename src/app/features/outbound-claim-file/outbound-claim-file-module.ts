import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { OutboundClaimFileRoutingModule } from './outbound-claim-file-routing-module';
import { OutboundClaimFile } from './outbound-claim-file';
import { OutboundClaimFileListComponent } from './components/outbound-claim-file-list-component/outbound-claim-file-list-component';
import { OutboundClaimFileAddComponent } from './components/outbound-claim-file-add-component/outbound-claim-file-add-component';
import { OutboundClaimFileEditComponent } from './components/outbound-claim-file-edit-component/outbound-claim-file-edit-component';
import { ConfirmDeleteDialogComponent } from '../../shared/components/confirm-delete-dialog/confirm-delete-dialog.component';

@NgModule({
  declarations: [
    OutboundClaimFile,
    OutboundClaimFileListComponent,
    OutboundClaimFileAddComponent,
    OutboundClaimFileEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OutboundClaimFileRoutingModule,
    ConfirmDeleteDialogComponent
  ]
})
export class OutboundClaimFileModule { }
