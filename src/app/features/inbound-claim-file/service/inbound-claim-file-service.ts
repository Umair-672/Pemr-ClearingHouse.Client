import { Injectable } from '@angular/core';
import { InboundClaimFile } from '../model/inbound-claim-file-model';
import { HttpClient } from '@angular/common/http';
import { BaseApiService } from '../../../shared/services/base-api.service';
import { ApiUrlService } from '../../../shared/services/api-url.service';

@Injectable({
  providedIn: 'root'
})
export class InboundClaimFileService extends BaseApiService<InboundClaimFile> {
  constructor(http: HttpClient, _apiUrlService: ApiUrlService) {
    super(http, _apiUrlService);
  }
}
