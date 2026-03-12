import { Injectable } from "@angular/core";
import { BaseApiService } from "../../../shared/services/base-api.service";
import { HttpClient } from "@angular/common/http";
import { BillingProvider } from "../model/billingProvider-model";
import { ApiUrlService } from "../../../shared/services/api-url.service";

@Injectable({ providedIn: "root" })
export class BillingProviderService extends BaseApiService<BillingProvider> {
  constructor(http: HttpClient, _apiUrlService: ApiUrlService) {
    super(http, _apiUrlService);
  }
}
