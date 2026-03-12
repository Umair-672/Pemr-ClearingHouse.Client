import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InterpretationField } from '../model/interpretation-field.model';
import { BaseApiService } from '../../../shared/services/base-api.service';
import { ApiUrlService } from '../../../shared/services/api-url.service';

@Injectable({ providedIn: 'root' })
export class InterpretationFieldService extends BaseApiService<InterpretationField> {
  constructor(http: HttpClient, _apiUrlService: ApiUrlService) {
    super(http, _apiUrlService);
  }
} 