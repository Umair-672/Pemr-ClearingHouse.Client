import { InboundClaimFile } from '../../inbound-claim-file/model/inbound-claim-file-model';

export interface InboundTransaction {
  id?: string; // MongoDB _id, optional for new records
  inboundClaimFileID: string;
  inboundClaimFile?: InboundClaimFile;
  ctrlNo: string;
  versionName: string;
  submitterEntityType: string;
  submitterFirstName: string;
  submitterLastName: string;
  submitterIdentificationCode: string;
  submitterContactName: string;
  submitterPhoneNo: string;
  submitterFaxNo: string;
  submitterEmail: string;
}