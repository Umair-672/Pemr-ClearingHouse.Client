import { InterpretationEntity } from '../../interpretation-entity/model/interpretation-entity.model';

export interface InterpretationField {
  id?: string;
  interpretationEntityID: string;
  interpretationEntity?: InterpretationEntity;
  name: string;
  code: string;
} 