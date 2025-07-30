import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseKeyword } from '../model/response-keyword.model';
import { BaseApiService } from '../../../shared/services/base-api.service';
import { ApiUrlService } from '../../../shared/services/api-url.service';

@Injectable({ providedIn: 'root' })
export class ResponseKeywordService extends BaseApiService<ResponseKeyword> {
  constructor(http: HttpClient, _apiUrlService: ApiUrlService) {
    super(http, _apiUrlService);
  }
} 