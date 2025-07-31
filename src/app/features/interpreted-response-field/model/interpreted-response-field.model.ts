import { InterpretedResponse } from '../../interpreted-response/model/interpreted-response.model';
import { InterpretationField } from '../../interpretation-field/model/interpretation-field.model';

export interface InterpretedResponseField {
  id?: string;
  interpretedResponseID: string;
  interpretedResponse?: InterpretedResponse;
  interpretationFieldID: string;
  interpretationField?: InterpretationField;
} 