import { ClaimStatus } from '../../claim-status/model/claim-status.model';
import { ResponseKeyword } from '../../response-keyword/model/response-keyword.model';

export interface InterpretedResponse {
  id?: string;
  claimStatusID: string;
  claimStatus?: ClaimStatus;
  responseKeywordID: string;
  responseKeyword?: ResponseKeyword;
  status: string;
  interpretedText: string;
} 