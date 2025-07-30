import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Insurance } from '../model/insurance.model';
import { BaseApiService } from '../../../shared/services/base-api.service';
import { ApiUrlService } from '../../../shared/services/api-url.service';

@Injectable({ providedIn: 'root' })
export class InsuranceService extends BaseApiService<Insurance> {
  constructor(http: HttpClient, _apiUrlService: ApiUrlService) {
    super(http, _apiUrlService);
  }
} 