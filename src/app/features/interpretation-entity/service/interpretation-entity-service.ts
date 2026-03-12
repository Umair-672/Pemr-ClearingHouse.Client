import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InterpretationEntity } from '../model/interpretation-entity.model';
import { BaseApiService } from '../../../shared/services/base-api.service';
import { ApiUrlService } from '../../../shared/services/api-url.service';

@Injectable({ providedIn: 'root' })
export class InterpretationEntityService extends BaseApiService<InterpretationEntity> {
  constructor(http: HttpClient, _apiUrlService: ApiUrlService) {
    super(http, _apiUrlService);
  }
} 