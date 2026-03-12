import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InterpretedResponseField } from '../model/interpreted-response-field.model';
import { BaseApiService } from '../../../shared/services/base-api.service';
import { ApiUrlService } from '../../../shared/services/api-url.service';

@Injectable({ providedIn: 'root' })
export class InterpretedResponseFieldService extends BaseApiService<InterpretedResponseField> {
  constructor(http: HttpClient, _apiUrlService: ApiUrlService) {
    super(http, _apiUrlService);
  }
} 