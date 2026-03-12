import { InboundTransaction } from "../../inbound-transaction/model/inboundTransaction";

export interface BillingProvider {
  id?: string;
  inboundTransactionID: string;
  entityTypeQualifier: string;
  firstName: string;
  lastName: string;
  middleName: string;
  npi: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipCode: string;
  taxonomyCode: string;
  inboundTransaction?: InboundTransaction;
}
