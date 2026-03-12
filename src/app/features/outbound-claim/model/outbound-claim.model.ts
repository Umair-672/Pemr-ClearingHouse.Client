import { OutboundTransaction } from "../../outbound-transaction/model/outbound-transaction.model";
import { Claim } from "../../claim/model/claim.model";

export interface OutboundClaim {
  id?: string;
  outboundTransactionID: string;
  outboundTransaction?: OutboundTransaction;
  claimID: string;
  claim?: Claim;
} 