import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseKeywordField } from '../model/response-keyword-field.model';
import { BaseApiService } from '../../../shared/services/base-api.service';
import { ApiUrlService } from '../../../shared/services/api-url.service';

@Injectable({ providedIn: 'root' })
export class ResponseKeywordFieldService extends BaseApiService<ResponseKeywordField> {
  constructor(http: HttpClient, _apiUrlService: ApiUrlService) {
    super(http, _apiUrlService);
  }
} 