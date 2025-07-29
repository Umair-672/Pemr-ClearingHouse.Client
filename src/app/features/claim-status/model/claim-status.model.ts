import { OutboundClaim } from "../../outbound-claim/model/outbound-claim.model";

export interface ClaimStatus {
  id?: string;
  outboundClaimID: string;
  outboundClaim?: OutboundClaim;
  status: string;
  responseText: string;
} 