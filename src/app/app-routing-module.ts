import { Auth } from './auth/auth';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'organizations',
   loadChildren: () => import('./features/organization/organization-module').then(m => m.OrganizationModule)
  },
  {path: 'dashboard',
   loadChildren: () => import('./features/dashboard/dashboard-module').then(m => m.DashboardModule),
   //canActivate: [AuthGuard]
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
  {path: 'billing-provider',
   loadChildren: () => import('./features/billing-provider/billing-provider-module').then(m => m.BillingProviderModule)
  },
  {path: 'inbound-claim-file',
   loadChildren: () => import('./features/inbound-claim-file/inbound-claim-file-module').then(m => m.InboundClaimFileModule)
  },
  {path: 'inboundtransaction',
   loadChildren: () => import('./features/inbound-transaction/inbound-transaction-module').then(m => m.InboundTransactionModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
