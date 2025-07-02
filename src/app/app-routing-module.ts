import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'organizations',
   loadChildren: () => import('./features/organization/organization-module').then(m => m.OrganizationModule),
   canActivate: [AuthGuard]
  },
  {path: 'dashboard',
   loadChildren: () => import('./features/dashboard/dashboard-module').then(m => m.DashboardModule),
   canActivate: [AuthGuard]
  },
  {path: 'payer',
   loadChildren: () => import('./features/payer/payer-module').then(m => m.PayerModule),
   canActivate: [AuthGuard]
  },
  {path: 'gateway',
   loadChildren: () => import('./features/gateway/gateway-module/gateway-module').then(m => m.GatewayModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
