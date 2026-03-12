import { InboundTransaction } from "../../inbound-transaction/model/inboundTransaction";


export interface PaytoAddress {
  id?: string;
  inboundTransactionID: string;
  inboundTransaction?: InboundTransaction;
  entityTypeQualifier: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipCode: string;
}
