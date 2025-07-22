import { ConfirmDeleteDialogComponent } from './../../shared/components/confirm-delete-dialog/confirm-delete-dialog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboundClaimFileRoutingModule } from './inbound-claim-file-routing-module';
import { InboundClaimFileListComponent } from './components/inbound-claim-file-list-component/inbound-claim-file-list-component';
import { InboundClaimFileAddComponent } from './components/inbound-claim-file-add-component/inbound-claim-file-add-component';
import { InboundClaimFileEditComponent } from './components/inbound-claim-file-edit-component/inbound-claim-file-edit-component';
import { InboundClaimFile } from './inbound-claim-file';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InboundClaimFile,
    InboundClaimFileListComponent,
    InboundClaimFileAddComponent,
    InboundClaimFileEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InboundClaimFileRoutingModule,
    ConfirmDeleteDialogComponent
  ]
})
export class InboundClaimFileModule { }
