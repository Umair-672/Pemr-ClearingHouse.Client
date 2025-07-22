import { Injectable } from "@angular/core";
import { BaseApiService } from "../../../shared/services/base-api.service";
import { HttpClient } from "@angular/common/http";
import { BillingProvider } from "../model/billingProvider-model";

@Injectable({ providedIn: "root" })
export class BillingProviderService extends BaseApiService<BillingProvider> {
  constructor(http: HttpClient) {
    super(http, 'http://localhost:5025/api/billing-provider');
  }

}
