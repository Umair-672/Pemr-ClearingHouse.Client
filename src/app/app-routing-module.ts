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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
