import { Auth } from './auth/auth';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { Logout } from './auth/logout/logout';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'logout', component: Logout},
  {path: 'organizations',
   loadChildren: () => import('./features/organization/organization-module').then(m => m.OrganizationModule)
  },
  {path: 'dashboard',
   loadChildren: () => import('./features/dashboard/dashboard-module').then(m => m.DashboardModule),
  },
  {path: 'payer',
   loadChildren: () => import('./features/payer/payer-module').then(m => m.PayerModule)
  },
  {path: 'gateway',
   loadChildren: () => import('./features/gateway/gateway-module').then(m => m.GatewayModule)
  },
  {path: 'subscriber',
   loadChildren: () => import('./features/subscriber/subscriber-module').then(m => m.SubscriberModule)
  },
  {path: 'billingProvider',
   loadChildren: () => import('./features/billing-provider/billing-provider-module').then(m => m.BillingProviderModule)
  },
  {path: 'inboundClaimFile',
   loadChildren: () => import('./features/inbound-claim-file/inbound-claim-file-module').then(m => m.InboundClaimFileModule)
  },
  {path: 'inboundtransaction',
   loadChildren: () => import('./features/inbound-transaction/inbound-transaction-module').then(m => m.InboundTransactionModule)
  },
  {path: 'patient',
   loadChildren: () => import('./features/patient/patient-module').then(m => m.PatientModule)
  },
  {path: 'billingPrvSecIdentification',
   loadChildren: () => import('./features/billing-prv-sec-identification/billing-prv-sec-identification-module').then(m => m.BillingPrvSecIdentificationModule)
  },
  {path: 'claim',
   loadChildren: () => import('./features/claim/claim-module').then(m => m.ClaimModule)
  },
  {path: 'claimEntity',
   loadChildren: () => import('./features/claim-entity/claim-entity-module').then(m => m.ClaimEntityModule)
  },
  {path: 'claimStatus',
   loadChildren: () => import('./features/claim-status/claim-status-module').then(m => m.ClaimStatusModule)
  },
  {path: 'dialupSettings',
   loadChildren: () => import('./features/dialup-settings/dialup-settings-module').then(m => m.DialupSettingsModule)
  },
  {path: 'ftpSettings',
   loadChildren: () => import('./features/ftp-settings/ftp-settings-module').then(m => m.FTPSettingsModule)
  },
  {path: 'insurance',
   loadChildren: () => import('./features/insurance/insurance-module').then(m => m.InsuranceModule)
  },
  {path: 'insuranceCarrier',
   loadChildren: () => import('./features/insurance-carrier/insurance-carrier-module').then(m => m.InsuranceCarrierModule)
  },
  {path: 'interpretationEntity',
   loadChildren: () => import('./features/interpretation-entity/interpretation-entity-module').then(m => m.InterpretationEntityModule)
  },
  {path: 'interpretationField',
   loadChildren: () => import('./features/interpretation-field/interpretation-field-module').then(m => m.InterpretationFieldModule)
  },
  {path: 'interpretedResponse',
   loadChildren: () => import('./features/interpreted-response/interpreted-response-module').then(m => m.InterpretedResponseModule)
  },
  {path: 'interpretedResponseField',
   loadChildren: () => import('./features/interpreted-response-field/interpreted-response-field-module').then(m => m.InterpretedResponseFieldModule)
  },
  {path: 'outboundClaim',
   loadChildren: () => import('./features/outbound-claim/outbound-claim-module').then(m => m.OutboundClaimModule)
  },
  {path: 'outboundClaimFile',
   loadChildren: () => import('./features/outbound-claim-file/outbound-claim-file-module').then(m => m.OutboundClaimFileModule)
  },
  {path: 'outboundTransaction',
   loadChildren: () => import('./features/outbound-transaction/outbound-transaction-module').then(m => m.OutboundTransactionModule)
  },
  {path: 'paytoAddress',
   loadChildren: () => import('./features/payto-address/payto-address-module').then(m => m.PaytoAddressModule)
  },
  {path: 'responseKeyword',
   loadChildren: () => import('./features/response-keyword/response-keyword-module').then(m => m.ResponseKeywordModule)
  },
  {path: 'responseKeywordField',
   loadChildren: () => import('./features/response-keyword-field/response-keyword-field-module').then(m => m.ResponseKeywordFieldModule)
  },
  {path: 'rttransactionSettings',
   loadChildren: () => import('./features/rttransaction-settings/rttransaction-settings-module').then(m => m.RTTransactionSettingsModule)
  },
  {path: 'transactionRoute',
   loadChildren: () => import('./features/transaction-route/transaction-route-module').then(m => m.TransactionRouteModule)
  },
  {path: 'vpnsettings',
   loadChildren: () => import('./features/vpnsettings/vpnsettings-module').then(m => m.VPNSettingsModule)
  },
  {path: 'x12Standard',
   loadChildren: () => import('./features/x12-standard/x12-standard-module').then(m => m.X12StandardModule)
  },
  {path: 'x12Transaction',
   loadChildren: () => import('./features/x12-transaction/x12-transaction-module').then(m => m.X12TransactionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
