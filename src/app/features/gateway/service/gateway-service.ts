import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gateway } from '../model/gateway.model';
import { BaseApiService } from '../../../shared/services/base-api.service';

@Injectable({ providedIn: 'root' })
export class GatewayService extends BaseApiService<Gateway> {
  constructor(http: HttpClient) {
    super(http, 'http://localhost:5025/api/gateway');
  }
}
