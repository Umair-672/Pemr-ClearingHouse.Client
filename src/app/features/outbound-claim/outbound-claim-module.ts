import { SearchableDropdownComponent } from './../../shared/components/searchable-dropdown/searchable-dropdown.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutboundClaimRoutingModule } from './outbound-claim-routing-module';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDeleteDialogComponent } from '../../shared/components/confirm-delete-dialog/confirm-delete-dialog.component';
import { OutboundClaimListComponent } from './components/outbound-claim-list-component/outbound-claim-list-component';
import { OutboundClaim } from './outbound-claim';
import { OutboundClaimEditComponent } from './components/outbound-claim-edit-component/outbound-claim-edit-component';
import { OutboundClaimAddComponent } from './components/outbound-claim-add-component/outbound-claim-add-component';



@NgModule({
  declarations: [
    OutboundClaim,
    OutboundClaimListComponent,
    OutboundClaimAddComponent,
    OutboundClaimEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OutboundClaimRoutingModule,
    ConfirmDeleteDialogComponent,
    SearchableDropdownComponent
  ]
})
export class OutboundClaimModule { }
