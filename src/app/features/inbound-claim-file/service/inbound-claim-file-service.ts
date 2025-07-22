import { Injectable } from '@angular/core';
import { InboundClaimFile } from '../model/inbound-claim-file-model';
import { HttpClient } from '@angular/common/http';
import { BaseApiService } from '../../../shared/services/base-api.service';

@Injectable({
  providedIn: 'root'
})
export class InboundClaimFileService extends BaseApiService<InboundClaimFile> {
  constructor(http: HttpClient) {
    super(http, 'http://localhost:5025/api/InboundClaimFile'); // Adjust the endpoint as needed
  }
}
