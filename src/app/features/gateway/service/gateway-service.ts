import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gateway } from '../model/gateway.model';
import { BaseApiService } from '../../../shared/services/base-api.service';
import { ApiUrlService } from '../../../shared/services/api-url.service';

@Injectable({ providedIn: 'root' })
export class GatewayService extends BaseApiService<Gateway> {
  constructor(http: HttpClient, _apiUrlService: ApiUrlService) {
    super(http, _apiUrlService);
  }
}
