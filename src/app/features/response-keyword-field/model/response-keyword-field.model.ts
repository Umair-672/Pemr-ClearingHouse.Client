import { ResponseKeyword } from '../../response-keyword/model/response-keyword.model';
import { InterpretedResponse } from '../../interpreted-response/model/interpreted-response.model';

export interface ResponseKeywordField {
  id?: string;
  responseKeywordID: string;
  responseKeyword?: ResponseKeyword;
  interpretedResponseID: string;
  interpretedResponse?: InterpretedResponse;
} 