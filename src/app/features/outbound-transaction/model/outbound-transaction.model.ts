import { OutboundClaimFile } from '../../outbound-claim-file/model/outbound-claim-file.model';

export interface OutboundTransaction {
  id?: string;
  outboundClaimFileID: string;
  outboundClaimFile?: OutboundClaimFile;
  ctrlNo: string;
  versionName: string;
  submitterEntityType: string;
  submitterFirstName: string;
  submitterLastName: string;
  submitterIdentification: string;
} 