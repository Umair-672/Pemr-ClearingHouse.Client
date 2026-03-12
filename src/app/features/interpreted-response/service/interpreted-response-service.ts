import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InterpretedResponse } from '../model/interpreted-response.model';
import { BaseApiService } from '../../../shared/services/base-api.service';
import { ApiUrlService } from '../../../shared/services/api-url.service';

@Injectable({ providedIn: 'root' })
export class InterpretedResponseService extends BaseApiService<InterpretedResponse> {
  constructor(http: HttpClient, _apiUrlService: ApiUrlService) {
    super(http, _apiUrlService);
  }
} 